import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function ProductCard(props) {
  const [animate, setAnimate] = useState(false);
  const { setItemNum, itemNum } = useOutletContext();

  const handleClick = (event) => {
    setAnimate(true);
    event.target.innerText = "Item added to cart!";
    localStorage.setItem(itemNum, JSON.stringify(props.product));
    setItemNum((e) => ++e);
    setTimeout(() => setAnimate(false), 2000);
    setTimeout(() => (event.target.innerText = "Add to cart"), 2000);
  };

  console.log(props.product);
  return (
    <div className="flex flex-col place-content-between border-1 rounded-xl border-solid w-80 h-108 overflow-hidden shadow-xl duration-150 ease-in-out hover:scale-105">
      <div className="w-full h-2/3 object-scale-down relative">
        <img className="w-full h-full" src={props.product.image} alt="" />
      </div>
      <p className="truncate hover:text-wrap hover:line-clamp-4 p-2">
        {props.product.title}
      </p>
      <div className="flex place-content-around pb-2">
        <p>{"$" + props.product.price}</p>
        <button
          className={` ${animate ? "text-green-500" : ""}`}
          onClick={handleClick}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
