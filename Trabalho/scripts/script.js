var localEmail = document.getElementById('textoMutavel')

function enviarEmail() {
    localEmail.innerHTML = "E-mail foi cadastrado."
    localEmail.style.color = 'white'
}

var mensagemReserva = document.getElementById('recebeTexto')

function reservarPasseio() {
    mensagemReserva.innerHTML = "Reserva confirmada! Entraremos em contato para maiores informações."
}