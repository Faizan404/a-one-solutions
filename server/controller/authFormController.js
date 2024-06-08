import crypto from "node:crypto";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = function (id) {
  return jwt.sign({ id }, process.env.JSON_WEB_TOKEN_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const sendTokenViaCookie = function (user, statusCode, res) {
  const token = generateToken(user.insertId);
  const cookieOpt = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true, //by this cookie cannot be access or modified on the browser
  };
  if (process.env.NODE_ENV === "production") cookieOpt.secure = true; //this sends cookies only on https,
  res.cookie("jwt", token, cookieOpt);
  res.status(statusCode).json({
    status: "success",
    token,
    data: user.insertId,
  });
};

const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.officer_role)) {
      return res.status(401).render("error", {
        user: req.user,
        msg: "You are not permitted to perform this action",
      });
    }
    next();
  };
};

const logout = (req, res) => {
  res.cookie("jwt", null, {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(204).json({
    status: "sucess",
    data: null,
  });
};

const encryptPassword = async (password) => await bcrypt.hash(password, 12);

const verifyPassword = async (candidatePassword, userPassword) =>
  await bcrypt.compare(candidatePassword, userPassword);

const createPasswordResetToken = function () {
  const createToken = crypto.randomBytes(32).toString("hex");
  const passwordResetToken = crypto
    .createHash("sha256")
    .update(createToken)
    .digest("hex");
  const passwordTokenExpires = Date.now() + 10 * 60 * 1000;
  return { createToken, passwordTokenExpires, passwordResetToken };
};

const setChangedAtProperty = (passwordChangedAt) =>
  (passwordChangedAt = Date.now() - 1000);

const checkPasswordReset = function (jwtTimestamp, passwordChangedAt) {
  // console.log(jwtTimestamp, passwordChangedAt);
  if (passwordChangedAt) {
    const changedAt = parseInt(passwordChangedAt / 1000, 10);
    return jwtTimestamp < changedAt;
  }
  return false;
};

const encryptToken = (resetToken) =>
  crypto.createHash("sha256").update(resetToken).digest("hex");

export {
  encryptToken,
  checkPasswordReset,
  setChangedAtProperty,
  createPasswordResetToken,
  verifyPassword,
  encryptPassword,
  logout,
  restrictTo,
  sendTokenViaCookie,
  generateToken,
};
