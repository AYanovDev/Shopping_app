import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // fetch("https://fakestoreapi.in/api/products/category")
    //   .then((res) => res.json())
    //   .then((res) => console.log(res));
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 gap-5 max-h-[700px] mt-16 mb-16 ml-48 mr-48">
        <div className=" col-start-1 col-span-2 row-start-1 row-span-3">
          <img
            className="hover:opacity-50 scale-100 hover:scale-105 duration-500 ease-in-out h-full w-full object-cover pb-5"
            src="src/assets/beautiful-happy-middle-age-couple-600nw-2255666991.webp"
            alt=""
          />
          <p className="absolute top-60">We are Generic Shop</p>
        </div>
        <div className="row-start-1 col-start-3">
          <img
            className="hover:opacity-50 scale-100 hover:scale-105 duration-500 ease-in-out w-full h-full object-fill"
            src="src/assets/audio.jpg"
            alt=""
          />
        </div>
        <div className="hover:opacity-50 scale-100 hover:scale-105 duration-500 ease-in-out row-start-1 col-start-4">
          <img
            className="w-full h-full object-fill"
            src="src/assets/laptops.webp"
            alt=""
          />
        </div>
        <div className="hover:opacity-50 scale-100 hover:scale-105 duration-500 ease-in-out row-start-2 col-start-3">
          <img
            className="w-full h-full object-fill"
            src="src/assets/mobiles.jpg"
            alt=""
          />
        </div>
        <div className="hover:opacity-50 scale-100 hover:scale-105 duration-500 ease-in-out row-start-2 col-start-4">
          <img
            className="w-full h-full object-fill"
            src="src/assets/TVs.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
