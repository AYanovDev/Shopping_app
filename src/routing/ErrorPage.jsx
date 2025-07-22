import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oops, wrong page! This one doesn't exist!</h1>
      <Link to={"/"}>
        You can go back to the home page by clicking this message.
      </Link>
    </div>
  );
};

export default ErrorPage;
