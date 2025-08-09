export default function ProductCard(props) {
  console.log(props.product);
  return (
    <div className="flex flex-col place-content-between border-1 rounded-xl border-solid w-80 h-108 overflow-hidden shadow-xl duration-150 ease-in-out hover:scale-105">
      <div className="w-full h-2/3 object-scale-down">
        <img className="w-full h-full" src={props.product.image} alt="" />
      </div>
      <p className="truncate hover:text-wrap hover:line-clamp-4 p-2">
        {props.product.title}
      </p>
      <div className="flex place-content-around pb-2">
        <p>{"$" + props.product.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
