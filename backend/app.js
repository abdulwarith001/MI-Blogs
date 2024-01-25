// app.js
import dotenv from "dotenv";
import express from "express";
import "express-async-errors";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import { dirname, join } from "path"; // Import join function from path module
import bodyParser from "body-parser";
import {authRoute, blogRoute} from './routes/index.js'
import { notFound, errorMiddleware } from "./middlewares/index.js";
import cors from 'cors'
import nodemailer from 'nodemailer'
dotenv.config();
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors())


// Use the join function to resolve paths
app.use(express.static(join(__dirname, "../client/dist")));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use("/api/auth", authRoute);
app.use("/api/blog", blogRoute);

app.get('/api/mail', async (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });

  let mailOptions = {
      from: "MI Blogs",
      to: "ayomideadebayo646@gmail.com",
      subject: 'Nodemailer Project',
      text: '<h1>Welcome to this project, cool sending a mail to you my bro.</h1>'
    };

    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        res.send("Email sent successfully");
      }
    });
})
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "../client/dist", "index.html"));
});



app.use(notFound)
app.use(errorMiddleware)

const port = process.env.PORT || 5000;


try {
  await mongoose.connect(process.env.MONGO_URL);
 app.listen(port, () => console.log(`Server started on port ${port}...`));
} catch (error) {
  console.log(error);
  process.exit(1);
}