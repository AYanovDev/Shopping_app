export default function ProductCard(props) {
  console.log(props.product);
  return (
    <div className="border-2 border-dashed">
      <div className="picture"></div>
      <p className="name"></p>
      <div className="price+btn">
        <p>Price</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
