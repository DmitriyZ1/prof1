import nodemailer from 'nodemailer'

let transporter = nodemailer.createTransport({
    service: "mail",
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: "zavoronk@mail.ru",
        pass: "HBCpkHb7n81hpJHbtH7w",
       
    },
});

export default async function sendmail(form:any, cb:any){
    transporter.sendMail(form, (err, info) => {
        if (err) return cb({result: "error", data: err})
        return cb({result: "ok", data: info})
    });
}