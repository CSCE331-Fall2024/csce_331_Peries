

function toggle_styles(): void{
    var element: HTMLLinkElement = document.getElementById('main_style') as HTMLLinkElement;

    var stylesheet: string = element.getAttribute('href') as string;

    if(stylesheet == 'styles.css'){
        stylesheet = 'alt.css';
    }
    else{
        stylesheet = 'styles.css';
    }

    element.setAttribute('href', stylesheet);
    localStorage.setItem('style', stylesheet);
}

window.onload = ()=>{
    var stylesheet: string = localStorage.getItem('style') as string;

    if(!stylesheet){
        console.log("no stylesheet found in cache");
        return;
    }

    var element: HTMLLinkElement = document.getElementById('main_style') as HTMLLinkElement;
    element.setAttribute('href', stylesheet);
}
