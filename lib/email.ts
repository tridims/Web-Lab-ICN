import nodemailer from "nodemailer"
import dotenv from 'dotenv'

export default async function email(receiver:string,subject:string,text:string="",html:string=""){
    dotenv.config({path:"../.env"})
    let transporter = nodemailer.createTransport({
        service: 'gmail', // service used
        auth: {
            user: process.env.EMAIL, // user
            pass: process.env.PASSWORD // password
        }
    });

    transporter.sendMail({
        from: '"Information Centric Networking Lab" <'+`${process.env.EMAIL}`+'>', // sender address
        to: receiver, // receiver
        subject: subject, // Subject line
        text: text, // plain text body
        html: html, // html body
    },
    function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
}
