var table = document.getElementById('main-table');
table.onclick = function (event) {
    var target = event.target;

    if (target.id == 'addRow') {
        var table = target.parentNode.parentNode;
        var newRow = table.insertRow(0);
        newRow.insertCell(0);
        newRow.insertCell(1);
        newRow.insertCell(2);
    } else if (target.tagName == 'TD') {
        var input = document.createElement('input');
        input.value = target.innerHTML.trim();
        target.innerHTML = '';
        target.insertBefore(input, target.firstChild);
        input.focus();
        input.addEventListener('focusout', loseFocus);
        input.addEventListener('keyup', function (event) {
            if (event.key == 'Enter') {
                event.preventDefault();
                loseFocus(event);
            }
        });
    }
}

function loseFocus(event) {
    var target = event.target;

    if (target.tagName == 'INPUT') {
        var td = target.parentNode;
        td.childNodes = '';
        td.innerHTML = target.innerHTML;
        td.innerHTML = target.value;
    }
}