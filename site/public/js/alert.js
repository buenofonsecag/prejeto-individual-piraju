function aguardar() {
    var alert = document.getElementById('alert');
    alert.style.display = 'block';

    // Fechar o alerta após 3 segundos
    setTimeout(function() {
        closeAlert();
    }, 2000);
}
function closeAlert() {
    var customAlert = document.getElementById('alert');
    customAlert.style.display = 'none';
}