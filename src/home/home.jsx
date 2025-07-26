export default function Home() {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 gap-5 max-h-[700px]">
        <div className=" col-start-1 col-span-2 row-start-1 row-span-3">
          <img
            className="h-full w-full object-cover"
            src="src/assets/premium_photo-1683121271931-669e09a55414.jpeg"
            alt=""
          />
        </div>
        <div className="row-start-1 col-start-3"></div>
        <div className="row-start-1 col-start-4"></div>
        <div className="row-start-2 col-start-3"></div>
        <div className="row-start-2 col-start-4"></div>
      </div>
    </>
  );
}
