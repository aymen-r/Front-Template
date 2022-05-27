import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import "./css/util.css";
import "./css/main.css";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import ProdPage from "./pages/ProdPage";

import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/products" element={<ProductsPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
