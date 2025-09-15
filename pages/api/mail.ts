import type { NextApiRequest, NextApiResponse } from "next";
// import sgMail from "@sendgrid/mail";

// sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');
import mailjet from "node-mailjet";

// MAILJET setup
const mailJetInit = mailjet.apiConnect(
  process.env.MAILJET_API_KEY as string,
  process.env.MAILJET_API_SECRET as string
);
type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const {
      name,
      email,
      message,
    }: { name: string; email: string; message: string } = req.body;
    const msg = `Name: ${name}\r\n Email: ${email}\r\n Message: ${message}`;
    try {
      // await sgMail.send(data);
      const request = mailJetInit.post("send", { version: "v3.1" }).request({
        Messages: [
          {
            From: {
              Email: process.env.MAIL_FROM as string,
              Name: "Me",
            },
            To: [
              {
                Email: process.env.MAIL_TO as string,
                Name: "Vinod Darapu",
              },
            ],
            Subject: `${name.toUpperCase()} sent you a message from Portfolio`,
            TextPart: `Email => ${email}`,
            HTMLPart: msg.replace(/\r\n/g, "<br>"),
          },
        ],
      });

      request
        .then(({ response }) => {
          res.status(response.status).json({
            message:
              response.status === 200
                ? "Your message was sent successfully."
                : "There was an error sending your message.",
          });
        })
        .catch((err) => {
          res.status(err.statusCode).json({
            message: `There was an error sending your message. ${err}`,
          });
        });
    } catch (err) {
      res
        .status(500)
        .json({ message: `There was an error sending your message. ${err}` });
    }
  }
}
