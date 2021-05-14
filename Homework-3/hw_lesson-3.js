// Homework lesson 3.

/*Задача 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.*/

function PrimeNumb(x) {
    if (x == 0 | x == 1) return false;
    for (let i = 2; i < x; i++) {
        if (x % i == 0) return false;
    }
    return true;
}

alert(1);
for (let i = 0; i <= 100; i++) {
    if (PrimeNumb(i) == true) alert(i);
}

/*Задача 2. 2. С этого урока начинаем работать с функционалом интернет-магазина.
Предположим, есть сущность корзины.
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/

var purchases = [['product1', 3999, 2], ['product2', 2999, 4], ['product3', 6999, 1]];

function addProduct(name, price, amount) {
    purchases.push([name, price, amount])
};

function countBasketPrice(whereToCount) {
    var costAmount = 0;
    for (el of whereToCount) {
        itemPrice = el[1] * el[2];
        costAmount += itemPrice
    };
    return costAmount
}

alert(`Общая стоимость: ${countBasketPrice(purchases)}`)

/*Задача 3. Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.*/

for (i = 0; i < 10; alert(i++)) { }

/*Задача 4. Нарисовать пирамиду с помощью console.log,
как показано на рисунке, только у вашей пирамиды должно быть 20 рядов.*/

