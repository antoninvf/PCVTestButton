let ddbtn;
let ddc;

let init = function () {
    ddbtn = document.getElementById('dropdownBtn');
    ddc = document.getElementById('dropdownContent');

    ddbtn.innerText = `${ddbtn.innerText} ▾`
    ddc.style.display = 'none';

    ddbtn.addEventListener('click', dropdownMenu);
}

let dropdownMenu = function () {

    ddc.style.position = 'absolute'
    ddc.style.zIndex = '9'
    ddc.style.border = '1px solid black'
    ddc.style.borderRadius = '0.3vh'
    ddc.style.width = '10%'
    ddc.style.display = 'block'
    ddc.style.marginTop = '0.1vh'
    ddc.style.marginLeft = '45%'

}

window.onclick = function(e) {
    if (e.target !== ddc && e.target !== ddbtn) { ddc.style.display = 'none'; }
}

window.onload = init;