import { useEffect } from "react";
import { HomeImg } from "./home-img";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    //  fetch("https://fakestoreapi.in/api/products/category")
    //    .then((res) => res.json())
    //    .then((res) => console.log(res));
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 gap-5 max-h-[600px] mt-16 mb-16 ml-48 mr-48">
        <div className="group relative col-start-1 col-span-2 row-start-1 row-span-3">
          <img
            className=" hover:opacity-30 scale-100 hover:scale-105 duration-500 ease-in-out h-full w-full object-cover pb-5"
            src="src/assets/beautiful-happy-middle-age-couple-600nw-2255666991.webp"
            alt=""
          />
          <p className="opacity-0 group-hover:opacity-100 duration-500 ease-in-out  absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-[30px] text-[#3d3d3d] font-extrabold">
            We are Generic Shop
          </p>
        </div>
        <Link to={`/goods/audio`}>
          <HomeImg
            src="src/assets/audio.jpg"
            text="Audio Tech"
            className="row-start-1 col-start-3"
          />
        </Link>
        <Link to={`/goods/laptop`}>
          <HomeImg
            src="src/assets/laptops.webp"
            text="Laptops"
            className="row-start-1 col-start-4"
          />
        </Link>
        <Link to={`/goods/mobile`}>
          <HomeImg
            src="src/assets/mobiles.jpg"
            text="Mobile Phones"
            className="row-start-2 col-start-3"
          />
        </Link>
        <Link to={`/goods/tv`}>
          <HomeImg
            src="src/assets/TVs.jpg"
            text="TVs"
            className="row-start-2 col-start-4"
          />
        </Link>
      </div>
    </>
  );
}
