import { Link } from "react-router-dom";

export default function Header(props) {
  function renderItemCount() {
    if (props.itemNum > 0)
      return (
        <div className=" absolute left-94/99 bottom-5/10 size-7  animate-bounce">
          <p className="text-[20px] -translate-y-1/10 translate-x-2/10">
            {props.itemNum}
          </p>
        </div>
      );
  }

  return (
    <>
      <div className="flex place-content-between">
        <div className="flex">
          <img
            className="h-20 w-20"
            src="src/assets/hexagon-letter-g.svg"
            alt=""
          />
          <h1 className="flex items-center justify-center text-[40px] pl-5 font-[400]">
            Generic Shop
          </h1>
        </div>
        <div className="flex relative text-[35px] items-center gap-20 pr-5">
          <Link to={"/"}>
            <button className="headerButtons">Home</button>
          </Link>
          <Link>
            <button className="headerButtons">Categories</button>
          </Link>
          <Link to={"/shoppingCart"}>
            <button className="headerButtons">Shopping Cart</button>
          </Link>

          {renderItemCount()}
        </div>
      </div>
    </>
  );
}
