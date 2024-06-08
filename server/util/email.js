import path from "node:path";

import nodemailer from "nodemailer";

const sendEmail = async function (option) {
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: process.env.MAILE_PORT,
    auth: {
      user: process.env.MAILE_USER,
      pass: process.env.MAILE_PASSWORD,
    },
  });

  const mailOpt = {
    from: "A One Solutions",
    to: option.email,
    subject: `It's your password reset token (valid for 10min)`,
    html: `<h1>Please click the following link to reset your password:</h1>
           <p>
            <a href="${option.url}">https://www.a-one-solution.netlify.app</a>
           </p>
           <p>${option.token}</p>`, // Plain HTML content
    text: `This link will expire in 10 minutes.`, // Plain text alternative
  };
  await transport.sendMail(mailOpt);
};

export { sendEmail };
