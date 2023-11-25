// abrir opcao quando clica no icone do login
function menu_perfil() {
    var menu = document.getElementById('div_perfil_menu');
    // menu.style.display = menu.style.display
    if (menu.style.display == 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

