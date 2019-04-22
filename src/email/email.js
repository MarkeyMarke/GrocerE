import * as emailjs from 'emailjs-com'
export function sendEmail(message){
    emailjs.init("user_QIOTKQgxx593KdLcNW2Sj");
    var templateParams = {
        text: 'James',
        user_name: 'Check this out!',
        user_email: 'MarkeyMarke133@gmail.com'
    };
     
    emailjs.send('default_service', 'contact_form', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
}
