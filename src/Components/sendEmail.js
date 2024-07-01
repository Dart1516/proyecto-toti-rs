import React from 'react';
import { google } from 'googleapis';

const SendEmail = () => {
  const sendEmail = async () => {
    try {
      const auth = await google.auth.getClient({
        scopes: ['https://www.googleapis.com/auth/gmail.send'],
      });

      const gmail = google.gmail({ version: 'v1', auth });

      const email = {
        to: 'destinatario@example.com',
        subject: 'Asunto del correo',
        message: 'Este es el cuerpo del mensaje.',
      };

      await gmail.users.messages.send({
        userId: 'me',
        requestBody: {
          raw: Buffer.from(
            `To: ${email.to}\nSubject: ${email.subject}\n\n${email.message}`
          ).toString('base64'),
        },
      });

      console.log('Correo electrónico enviado correctamente.');
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
    }
  };

  return (
    <div>
      <button onClick={sendEmail}>Enviar Correo</button>
    </div>
  );
};

export default SendEmail;
