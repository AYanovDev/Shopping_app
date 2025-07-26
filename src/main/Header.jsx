export default function Header() {
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
        <div className="flex text-[35px] items-center gap-20 pr-5">
          <p>Home</p>
          <p>Categories</p>
          <p>Shopping Cart</p>
        </div>
      </div>
    </>
  );
}
