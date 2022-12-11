import { useState } from "react";
import Footer from "./components/footer";
import Navbar from "./components/header/Navbar";
import Game from "./pages/Game";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Home></Home> */}
      <Game></Game>
      <Footer></Footer>
    </>
  );
}

export default App;
