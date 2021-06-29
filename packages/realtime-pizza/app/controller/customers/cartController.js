const UserCart = require("./../../models/user-cart")
function cartController() {
    return {
        updateCart: (req, res, next) => {
            const pizza = req.body
            if (!req.session.cart) {
                console.log('inside if')
                req.session.cart = {
                    items: {},
                    totalQty: 0,
                    totalPrice: 0
                }
            }
            let cart = req.session.cart;
            if (!cart.items[pizza._id]) {
                cart.items[pizza._id] = {
                    item: pizza,
                    qty: 1,
                    price: pizza.price
                }
                cart.totalQty += 1;
                cart.totalPrice += pizza.price

            }
            else {
                cart.items[pizza._id].qty += 1;
                cart.totalQty += 1;
                cart.totalPrice += pizza.price;
            }
            console.log(cart);
            res.json({ totalQty: req.session.cart.totalQty, success: true });

        },
        getCart: (req, res, next) => {
            res.json(req.session.cart);
        }
    }
}

module.exports = cartController;