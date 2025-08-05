import { useParams } from "react-router-dom";

export default function Goods() {
  const { goodsId } = useParams();

  return (
    <>
      <p>Here should be yer goods - category of {goodsId}</p>
    </>
  );
}
