document.addEventListener('DOMContentLoaded', function(){
    localStorage.clear();
})

document.getElementsByTagName('button')[0].onclick = function(target) {
    var links = document.getElementsByTagName('p')[0].children;

    for(var i = 0; i < links.length; i++){
        links[i].style.color = 'red';
        links[i].style.fontWeight = 'bold';
    }

    var links = document.getElementsByTagName('p')[1].addEventListener('click', clickOnSecondP, false);
}

function clickOnSecondP(event){
    if(event.target.tagName == 'A'){
        if(localStorage.getItem(event.target.innerText) !== null){
            alert(JSON.parse(localStorage.getItem(event.target.innerText)).path);
        } else {
            localStorage.setItem(event.target.innerText, JSON.stringify({path:event.target.href}));
            event.target.href = '#';
            alert('Ссылка была сохранена в Local Storage');
        }
        event.preventDefault();
    }
}

