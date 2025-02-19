import nodemailer from "nodemailer";

export default async function handler(req, res) {


     if (req.method !== "POST") {
          return res.status(405).json({ error: "Method Not Allowed" });
     }
     

     const { 
          unit,
          productName,
          name,
          email,
          phone,
          color,
          quantity,
          length,
          width,
          depth,
          deadline,
          message
     } = req.body;

     if (!unit || !productName || !name || !quantity || !email ) {
          return res.status(400).json({ error: "Required fields are missing." });
     }

     try {
          const transporter = nodemailer.createTransport({
               host: process.env.EMAIL_HOST, // Set this in `.env.local`
               port: 465,
               secure: true,
               auth: {
                    user: process.env.EMAIL,
                    pass: process.env.EMAIL_PASSWORD,
               },
          });

          const mailData = {
               from: process.env.EMAIL,
               to: `mailto:mufaqar@gmail.com, ${email}`,
               subject: `Message From ${name}`,
               text: `Sent from: ${email}`,
               html: `
            <p><strong>Name: </strong> ${name}</p>
            <p><strong>Email: </strong> ${email}</p>
            <p><strong>Phone: </strong> ${phone}</p>
            <p><strong>Product: </strong> ${productName}</p>
            <p><strong>Length: </strong> ${length}</p>
            <p><strong>Width: </strong> ${width}</p>
            <p><strong>Depth: </strong> ${depth}</p>
            <p><strong>Colors: </strong> ${color}</p>
            <p><strong>Unit: </strong> ${unit}</p>
            <p><strong>Quantity: </strong> ${quantity}</p>
            <p><strong>Deadline: </strong> ${deadline}</p>
            <p><strong>Message: </strong> ${message}</p>
            `,
          };

          const info = await transporter.sendMail(mailData);
          return res.status(200).json({ success: true, message: "Email sent successfully!", info });

     } catch (error) {
          console.error("Email sending failed:", error);
          return res.status(500).json({ error: "Failed to send email" });
     }
}
