import Empty from "./emptyShoppingCart"; // this is to give back in case of empty shopping cart

export default function ShoppingCart() {
  if (localStorage.length === 0) return <Empty />;
  return <div></div>;
}
