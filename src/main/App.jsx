import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [itemNum, setItemNum] = useState(0);

  return (
    <>
      <Header itemNum={itemNum}></Header>
      <Outlet context={{ setItemNum, itemNum }} />
      <Footer></Footer>
    </>
  );
}

export default App;
