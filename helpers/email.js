import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const emailRegistro = async(datos) => {
    const { email, nombre, token } = datos;

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
    });

    const info = await transport.sendMail({
        from: "UpTask - Administrador de Proyectos",
        to: email,
        subject: "UpTask - Confirma tu cuenta",
        text: "Comprueba tu cuenta en UpTask",
        html: `
            <p>Hola: ${nombre} Comprueba tu cuenta en UpTask</p>
            <p>Tu cuenta ya está casi lista, solo debes comprobarla en el siguiente enlace: </p>
            <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
            <p>Si tú no creaste esta cuenta, puedes ignorar el mensaje</p>
        `
    });
};

const emailOlvidePassword = async(datos) => {
    const { email, nombre, token } = datos;

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
    });

    const info = await transport.sendMail({
        from: "UpTask - Administrador de Proyectos",
        to: email,
        subject: "UpTask - Reestablece tu password",
        text: "Reestablece tu password",
        html: `
            <p>Hola: ${nombre} has solicitado reestablecer tu passwordk</p>
            <p>Sigue el siguiente enlace para generar un nuevo password: </p>
            <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a>
            <p>Si tú no solicitaste este email, puedes ignorar el mensaje</p>
        `
    });
};

export {
    emailRegistro,
    emailOlvidePassword
}