export function calculateTotal(data) {
  const subTotal = data.reduce((acc, item) => acc + item.qty * item.price, 0);
  return subTotal;
}
export function calculateQty(data) {
  const quantity = data.reduce((acc, item) => acc + item.qty, 0);
  return quantity;
}
