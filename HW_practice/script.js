document.addEventListener('DOMContentLoaded', function () {
    localStorage.clear();
})

document.getElementsByTagName('button')[0].onclick = function (target) {
    var rows = document.getElementsByTagName('p');
    rows[1].addEventListener('click', clickOnSecondP, false);

    var links = rows[0].children;

    var style = document.createElement('style');
    style.innerHTML = '.link { color: red; font-weight: bold }';
    document.getElementsByTagName('head')[0].appendChild(style);
    
    for (var i = 0; i < links.length; i++) {
        links[i].classList.add('link');
    }
}

function clickOnSecondP(event) {
    event.preventDefault();
    if (event.target.tagName == 'A') {
        if (localStorage.getItem(event.target.innerText) !== null) {
            alert(JSON.parse(localStorage.getItem(event.target.innerText)).path);
        } else {
            localStorage.setItem(event.target.innerText, JSON.stringify({ path: event.target.href }));
            event.target.href = '#';
            alert('Ссылка была сохранена в Local Storage');
        }
    }
}