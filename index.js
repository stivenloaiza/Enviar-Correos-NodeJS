//Requerimos el paquete
var nodemailer = require('nodemailer');

var destino="destinatario@host.com, destinatario2@host2.com";
var asuntoCorreo= "Esta es una prueba";
var textoCorreo="Esto es si lo cargan en modo plano";
var htmlbody='Te enviamos este correo porque quieres recuperar tu contraseña<br>Pulsa <a href="https://tuenalceparaconfirmarcorreo.com/">aquí</a> para crear nueva contraseña';


enviarCorreo(destino, asuntoCorreo,textoCorreo, htmlbody);

//los destinatarios se envian como string, si son varios se separan por comas
function enviarCorreo(destinatarios, asunto, texto, cuerpoHtml) 
{
   var transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'tucorreo@gmail.com',
        pass: 'tucontraseña123'
    }
    });

    var mailOptions = {
        from: 'tucorreo@gmail.com',
        to: destinatarios,
        subject: asunto,
        text: texto,
        html: cuerpoHtml,
    };
    transport.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
          } else {
            console.log('Email enviado: ' + info.response);
            console.log('ID: ' + info.messageId);
            console.log('Enviado exitosamente a: ' + info.accepted );
          }
    });
};
