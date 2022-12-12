import { Navigate, redirect, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/header/Navbar";
import Game from "./pages/Game";
import Home from "./pages/Home";

function App() {
  const RedirectHome = () => {
    return <Navigate to="/home"></Navigate>;
  };
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<RedirectHome></RedirectHome>}></Route>
        <Route path="/home" element={<Home></Home>} index></Route>
        <Route path="/game/:id" element={<Game></Game>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
