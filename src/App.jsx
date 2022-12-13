import { Navigate, redirect, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/header/Navbar";
import Game from "./pages/Game";
import Auth from "./pages/Auth";

function App() {
  const RedirectHome = () => {
    return <Navigate to="/home"></Navigate>;
  };
  return (
    <div className="h-[100vh]">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<RedirectHome></RedirectHome>}></Route>
        <Route path="/home" element={<Home></Home>} index></Route>
        <Route path="/game/:id" element={<Game></Game>}></Route>
        <Route path="/login" element={<Auth></Auth>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
