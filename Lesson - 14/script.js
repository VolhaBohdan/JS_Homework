
document.getElementById('x').onkeyup = function (event) {
    checkDimensionValue(event.target.value, document.getElementById('y').value);
}

document.getElementById('y').onkeyup = function (event) {
    checkDimensionValue(event.target.value, document.getElementById('x').value);
}

function checkDimensionValue(value1, value2) {
    var button = document.getElementsByTagName('button')[0];
    if (value1 == '' || value2 == '') {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}

document.getElementsByTagName('button')[0].onclick = function () {
    var oldTable = document.getElementsByTagName('table')[0];
    if (oldTable != null) {
        oldTable.remove();
    }

    var x = +document.getElementById('x').value;
    var y = +document.getElementById('y').value;

    if (Number.isInteger(x) && Number.isInteger(y) && x > 1 && x <= 10 && y > 1 && y <= 10) {
        var table = document.createElement("table");
        for (var i = 0; i < y; i++) {
            var tr = document.createElement('tr');
            for (var j = 0; j < x; j++) {
                var td = document.createElement('td');
                if (i % 2 == j % 2) {
                    td.style.backgroundColor = "black";
                }

                tr.appendChild(td);
            }
            table.appendChild(tr);
        }

        table.addEventListener('click', invertTableColors, false);

        document.getElementById('container').appendChild(table);
    } else {
        alert('Значения X и Y должны быть в диапазоне от 1 до 10!');
    }
}

function invertTableColors(event){
    var table = document.getElementsByTagName('table')[0];
    for (var i = 0; i < table.rows.length; i++) {
        var row = table.rows[i]

        for (var j = 0; j < row.cells.length; j++) {
          var col = row.cells[j];
          if(col.style.backgroundColor === 'black' ){
            col.style.backgroundColor = '';
          } else {
              col.style.backgroundColor = 'black';
          }
        }  
     }
}