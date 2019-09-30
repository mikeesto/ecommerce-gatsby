export const CartTotal = cart =>
  cart.reduce((acc, next) => acc + next.quantity * next.price, 0)
