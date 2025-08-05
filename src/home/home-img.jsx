export function HomeImg(props) {
  return (
    <div className={"group relative " + props.className}>
      <img
        className="hover:opacity-30 scale-100 hover:scale-105 duration-500 ease-in-out w-full h-full object-fill cursor-pointer"
        src={props.src}
        alt=""
      />
      <p className="opacity-0 group-hover:opacity-100 duration-500 ease-in-out  absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-[25px] text-[#3d3d3d] font-bold">
        {props.text}
      </p>
    </div>
  );
}
