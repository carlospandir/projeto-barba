

document.getElementById('contato-form').addEventListener('submit', function (event) {
  event.preventDefault();

  emailjs.sendForm('service_eue2u7g', 'template_m2hfwy6', this)
    .then(function () {
      alert('Agendamento enviado com sucesso!');
    }, function (error) {
      alert('Erro ao enviar: ' + JSON.stringify(error));
    });
});
