import { createContext, useState } from "react";
import useDeepCopy from "../components/hooks/useDeepCopy";

const cartContext = createContext({ default: "default" });
const Provider = cartContext.Provider;

function CartProvider (props) { 
const [cart, setCart] = useState([]);
const newCart = useDeepCopy(cart);

function addItem(producto, countFromCounter) {
   if (isItemInCart(producto.id)) {
   const itemIndex = cart.findIndex(
   (isItemInCart) => isItemInCart.id === producto.id
   );
   newCart[itemIndex].valor += countFromCounter;
   } else {
      newCart.push({ ...producto, valor: countFromCounter});
   }
   setCart(newCart);
   }
function removeItem(idToDelete) {
}
function isItemInCart(id){ 
   return cart.some((isItemInCart) => isItemInCart.id === id);
}
return (
   <cartContext.Provider value={{ cart : cart , addItem , removeItem , isItemInCart }}>
      {props.children}
   </cartContext.Provider>
);}

export {cartContext , CartProvider } 
