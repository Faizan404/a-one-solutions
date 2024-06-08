import express from "express";

import {
  forgetPassword,
  login,
  resetPassword,
  signUp,
} from "../controller/oAuth.js";
import { logout } from "../controller/authFormController.js";

const router = express.Router();
``;
router.route("/login").post(login);
router.route("/signup").post(signUp);
router.route("/forget-password").post(forgetPassword);
router.route("/reset-password").patch(resetPassword);
router.route("/logout").get(logout);

export { router };
