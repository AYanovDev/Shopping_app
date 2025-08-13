import { Link } from "react-router-dom";

export default function Empty() {
  return (
    <div>
      <p>Wooooooow. Such empty...</p>
      <p>Seems like you haven't added anything to the cart.</p>
      <Link to={"/"}>
        You can go back to the home page by clicking this message.
      </Link>
    </div>
  );
}
