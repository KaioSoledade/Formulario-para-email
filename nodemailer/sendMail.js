const nodemailer = require("nodemailer");
require('dotenv').config();
const path = require('path');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.USER,
      pass: process.env.PASS_PASSWORD,
    },
    tls: {
        // Força o uso do TLS 1.2
        minVersion: 'TLSv1.2',
    },
  });

  const mailOptions = {
    from: {
        name: "Kaio Soledade",
        address: process.env.USER,
    }, // sender address
    to: ["cursos.soledade@gmail.com"], // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
    attachments: [
        {
            filename: 'teste.pdf',
            path: path.join(__dirname, 'teste.pdf'),
            contentType: 'aplication/pdf'
        },
        {
            filename: 'imagem.jpg',
            path: path.join(__dirname, 'imagem.jpg'),
            contentType: 'iamge/jpg'
        },
    ]
  }

  const sendMail = async(transporter, mailOptions) => {
    try {
        await transporter.sendMail(mailOptions)
        console.log('Email foi enviado');
    } catch (error){
        console.error(error);
    }

  }

    sendMail(transporter, mailOptions);

