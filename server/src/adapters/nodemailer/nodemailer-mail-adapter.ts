import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "bb128cff64b05d",
    pass: "ae1339a0158821",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Gabriel Patricio <gabrieltp087@gmail.com",
      subject,
      html: body,
    });
  }
}
