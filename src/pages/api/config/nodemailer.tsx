import { ownerEmail } from "@/utils/emailConfig";

let nodemailer;

if (typeof window === 'undefined') {
  nodemailer = require('nodemailer');
}

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: ownerEmail,
    pass: "nyxm bezl iwpp gwhg",
  },
});

