import { AppError } from "../util/appError.js";

const jsonWebTokenError = () =>
  new AppError("Invalid Token, Please login again", 401);

const tokenExpiredError = () =>
  new AppError("Your token has been expired, Please login again.", 401);

const errorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const errorProd = (err, res) => {
  if (err.isOperational)
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  else
    res.status(500).json({
      status: "error",
      message: "Something went wrong",
    });
};

export default (err, req, res, next) => {
  err.statusCode = err.statusCode ?? 500;
  err.status = err.status ?? "error";

  if (process.env.NODE_ENV === "development") errorDev(err, res);
  else if (process.env.NODE_ENV === "production") {
    if (err.name === "JsonWebTokenError") err = jsonWebTokenError();
    else if (err.name === "TokenExpiredError") err = tokenExpiredError();
    
    errorProd(err, res);
  }
};
