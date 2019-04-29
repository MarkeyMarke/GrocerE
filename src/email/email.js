import * as emailjs from 'emailjs-com'
export function sendEmail(receiverAddress, subject, message){
    emailjs.init("user_QIOTKQgxx593KdLcNW2Sj");
    var templateParams = {
        user_email: receiverAddress,
        subject: subject,
        message: message
    };
     
    emailjs.send('default_service', 'contact_form', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
}
