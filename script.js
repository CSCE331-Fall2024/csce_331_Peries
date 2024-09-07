function toggle_styles() {
    var element = document.getElementById('main_style');
    var stylesheet = element.getAttribute('href');
    if (stylesheet == 'styles.css') {
        stylesheet = 'alt.css';
    }
    else {
        stylesheet = 'styles.css';
    }
    element.setAttribute('href', stylesheet);
    localStorage.setItem('style', stylesheet);
}
window.onload = function () {
    var stylesheet = localStorage.getItem('style');
    if (!stylesheet) {
        console.log("no stylesheet found in cache");
        return;
    }
    var element = document.getElementById('main_style');
    element.setAttribute('href', stylesheet);
};
