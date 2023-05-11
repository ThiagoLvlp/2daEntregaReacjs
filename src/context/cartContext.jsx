import { createContext, useState } from "react";
import useDeepCopy from "../components/hooks/useDeepCopy";

const cartContext = createContext({ default: "default" });
const Provider = cartContext.Provider;

function CartProvider (props) { 
const [cart, setCart] = useState([]);
const newCart = useDeepCopy(cart);
const [producto,setproductos] = useState ([]);

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
function removeItem(idToDelate) {
   setCart(cart.filter((item) => item.id !== idToDelate));
}
function isItemInCart(id){ 
   return cart.some((isItemInCart) => isItemInCart.id === id);
}
function Total(){
   let total = 0 ;
   producto.forEach( item => total += item.valor)
}
return (
   <cartContext.Provider value={{ cart : cart , addItem , removeItem , isItemInCart }}>
      {props.children}
   </cartContext.Provider>
);}

export {cartContext , CartProvider } 

