// Homework lesson 5.

/*Задание 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию.
Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.*/

function Сhessboard() {
    var table = document.createElement('table');
    var flag = true;

    var trr = document.createElement('tr');
    var arr = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    // делаем ячейки:
    for (var i = 0; i < 8; i++) {
        var tr = document.createElement('tr');

        // делаем ячейку для цифр:
        var tdd = document.createElement('td');
        tdd.style.width = '50px';
        tdd.style.height = '50px';
        tdd.align = 'center';
        tdd.innerHTML = 8 - i;
        tr.appendChild(tdd);

        for (var j = 0; j < 8; j++) {
            if (j == 0)
                flag = !flag;

            var td = document.createElement('td');
            td.style.width = '50px';
            td.style.height = '50px';

            if (flag) {
                td.style.background = 'black';
            } else
                td.style.background = 'LightGrey';

            tr.appendChild(td);
            flag = !flag;
        }
        table.appendChild(tr);
    }

    // Добавляем буквы:
    for (var k = 0; k < 9; k++) {

        var td = document.createElement('td');
        td.style.width = '50px';
        td.style.height = '50px';
        td.style.background = 'white';
        td.align = 'center';
        td.innerHTML = arr[k];

        trr.appendChild(td);

    }
    table.appendChild(trr);

    document.body.appendChild(table);
}

/*Задание 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:*/
