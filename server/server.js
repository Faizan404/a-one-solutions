import mysql from "mysql";

import { app } from "./app.js";
import { router } from "./router/authRouter.js";
import globalErrorHandler from "./controller/errorController.js";
import { AppError } from "./util/appError.js";

const connection = mysql.createConnection({
  host: "localhost",
  database: "a_one_solution",
  user: "root",
  password: "",
});

connection.connect(function (err, connection) {
  if (err) throw err;
  else {
    console.log("Connection established successfully");
    // console.log(connection);
  }
});

const requireFilesAndExports = () => {
  // const auth = require("./router/authRouter");
  app.use("/api/v1", router);

  app.all("*", (req, res, next) =>
    next(
      new AppError(
        `The route ${req.originalUrl} you are trying to access isn't available`,
        404
      )
    )
  );
  // ? ********* GLOBAL ERROR HANDLER
  app.use(globalErrorHandler);
};

// TODO: LISTENING FOR REQUEST ON SERVER-----------------------
app.listen(process.env.PORT, function () {
  console.log("listening on port 3000");
  requireFilesAndExports();
});

export { connection };
