import { promisify } from "util";
import jwt from "jsonwebtoken";

import { connection } from "../server.js";
import {
  checkPasswordReset,
  encryptPassword,
  createPasswordResetToken,
  encryptToken,
  sendTokenViaCookie,
  setChangedAtProperty,
  verifyPassword,
} from "./authFormController.js";
import { sendEmail } from "../util/email.js";
import { AppError } from "../util/appError.js";
import { catchAsync } from "../util/appAsyncError.js";

// TODO: AUTHENTICATION-------------------------------------------
// ? PROTECTING ROUTES--------------------------------
const protectingRoutes = catchAsync(async (req, res, next) => {
  let token = "";
  if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }
  if (!token)
    return next(new AppError("You are not logged in, Please login first", 401));

  // TODO: verify token
  let decoded = await promisify(jwt.verify)(
    token,
    process.env.JSON_WEB_TOKEN_SECRET
  );

  // TODO: check user still exist
  const queryString = `SELECT * FROM users WHERE id = ${decoded.id}`;

  connection.query(queryString, function (err, results) {
    if (err || results.length === 0)
      return next(new AppError("User does not exist", 404));

    // TODO: check if user changed his password
    if (checkPasswordReset(decoded.iat, results[0].password_changed_at))
      return next(
        new AppError(
          "You changed your password,Please login again with new password",
          401
        )
      );

    req.user = results[0];
    next();
  });
});

// ? SIGN UP------------------------------
const signUp = (req, res, next) => {
  let { userName, userEmail, userPassword } = req.body;

  const checkEmailExists = `SELECT * FROM users WHERE user_email = '${userEmail}'`;

  connection.query(checkEmailExists, async function (err, results) {
    if (err || results.length > 0)
      return next(new AppError("This email address has already taken", 403));

    //* encrypting password
    userPassword = await encryptPassword(userPassword);

    const createUser = `
      INSERT INTO users(user_name, user_email, user_password)
      VALUES ('${userName}' , '${userEmail}', '${userPassword}')`;

    connection.query(createUser, function (err, results) {
      if (err) return next(new AppError("Invalid Data Entered", 400));
      sendTokenViaCookie(results, 201, res);
    });
  });
};

// ? LOGIN--------------------------------------
const login = (req, res, next) => {
  const { userEmail, userPassword } = req.body;

  const queryString = `SELECT * FROM users WHERE user_email = '${userEmail}'`;

  connection.query(queryString, async function (err, results) {
    if (
      err ||
      results.length === 0 ||
      !(await verifyPassword(userPassword, results[0].user_password))
    )
      return next(new AppError("Email or password incorrect", 401));

    sendTokenViaCookie(results[0], 200, res);
  });
};

// ? FORGET PASSWORD----------------------------------------
const forgetPassword = (req, res, next) => {
  const { userEmail } = req.body;

  const queryString = `SELECT * FROM users WHERE user_email = '${userEmail}'`;

  connection.query(queryString, async function (err, results) {
    if (err || !results[0])
      return next(new AppError("User of this email doesn't exists", 404));

    const user = results[0];
    const resetData = createPasswordResetToken();

    const queryStr = `
    UPDATE users 
    SET password_reset_token = '${resetData.passwordResetToken}', reset_token_expires_in = ${resetData.passwordTokenExpires} 
    WHERE id = '${user.id}'`;

    connection.query(queryStr, async function (err, results) {
      if (err) return next(new AppError("Invaild Data Entered", 400));

      // const urlSend = `${req.protocol}://${req.get(
      //   "host"
      // )}/reset-password`;
      const urlSend = `http://localhost:4200/reset-password`;

      const message = `Forgot your password ? don't worry hit this url ${urlSend}.Thanks to being part of our community.`;

      await sendEmail({
        url: urlSend,
        email: userEmail,
        message,
        token: resetData.createToken,
      });

      res.status(200).json({
        status: "sucess",
        message: "Token has been sent successfully",
      });
    });
  });
};

// ? RESET PASSWORD---------------------------------------
const resetPassword = (req, res, next) => {
  let { userPassword, passwordResetToken, userEmail } = req.body;

  let user = `SELECT * FROM users WHERE user_email = '${userEmail}'`;

  connection.query(user, async function (err, results) {
    if (err || !results[0])
      return next(new AppError("User of this email doesn't exists", 404));

    user = results[0];
    const userToken = encryptToken(passwordResetToken);
    const queryString = `
        SELECT * FROM users
        WHERE password_reset_token = '${userToken}' AND reset_token_expires_in >= '${Date.now()}'`;
    connection.query(queryString, async function (err, results) {
      if (err)
        return next(
          new AppError("Your token has expired or Invalid Token", 401)
        );
      userPassword = await encryptPassword(userPassword);

      const queryStr = `
            UPDATE users 
            SET user_password = '${userPassword}', password_reset_token = ${null} , reset_token_expires_in = ${null}, password_changed_at = ${setChangedAtProperty()} 
            WHERE id = ${user.id}`;

      connection.query(queryStr, (err, results) => {
        if (err) return next(new AppError("Invalid Data Entered", 400));
        sendTokenViaCookie(user, 200, res);
      });
    });
  });
};

export { resetPassword, forgetPassword, login, signUp, protectingRoutes };
