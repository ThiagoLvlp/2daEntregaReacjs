import "./App.css";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailConteiner";

function App() {
  return (
      <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path="/" element={<ItemListConteiner/>} />
        <Route path="/categoria/:categoriaid" element={<ItemListConteiner/>} />
        <Route path="/detalle/:id" element={<ItemDetailConteiner/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
