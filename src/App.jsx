import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/header/Navbar";
import Game from "./pages/Game";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import { AuthContext } from "./state/AuthContext";
import { useContext } from "react";

function App() {
  const { currentUser } = useContext(AuthContext);
  const RedirectHome = () => {
    return <Navigate to="/home"></Navigate>;
  };
  const ProtectedRoute = ({ children }) => {
    if (!!currentUser) {
      console.log(currentUser);
      return <Navigate to="/home"></Navigate>;
    }
    return children;
  };
  return (
    <div className="h-[100vh]">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<RedirectHome></RedirectHome>}></Route>
        <Route path="/home" element={<Home></Home>} index></Route>
        <Route path="/game/:id" element={<Game></Game>}></Route>
        <Route
          path="/login"
          element={
            <ProtectedRoute>
              <Auth></Auth>
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
