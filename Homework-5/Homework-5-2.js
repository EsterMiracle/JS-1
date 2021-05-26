// Homework lesson 5.

/*Задание 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:*/

const cart = {
    cartListBlock: null,
    clearCartButton: null,
    goods: [
        {
            id_product: 111,
            product_name: "product1",
            price: 3999,
            quantity: 2,
        },
        {
            id_product: 222,
            product_name: "product2",
            price: 2999,
            quantity: 4,
        },
        {
            id_product: 333,
            product_name: "product3",
            price: 6999,
            quantity: 1,
        },
    ],
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.clearCartButton = document.querySelector('.cart-btn');
        this.clearCartButton.addEventListener('click', () => this.clearCart());

        this.render();
    },
    render() {
        if (this.goods.length) {
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} товара стоимостью ${this.getCartPrice()}`);
        } else {
            this.cartListBlock.textContent = "Корзина пуста =(";
        }
    },
    getCartPrice() {
        return this.goods.reduce(function (price, good) {
            return price + good.price * good.quantity;
        }, 0);
    },
    clearCart() {
        this.goods = [];
        this.render();
    },
};
cart.init();