import "./App.css";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailConteiner";
import { CartProvider } from "./context/cartContext"
import CartContainer from "./components/Carrito/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListConteiner/>} />
          <Route path="/categoria/:categoriaid" element={<ItemListConteiner/>} />
          <Route path="/detalle/:id" element={<ItemDetailConteiner/> } />
          <Route path="/cart" element={<CartContainer/> } />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
