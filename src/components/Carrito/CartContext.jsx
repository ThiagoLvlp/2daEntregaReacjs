import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function CartContainer(props) {
    const context = useContext(cartContext)

    const cart = context.cart;

    return (
    <div>
        <h1>Carrito de compras</h1>
        {cart.map((item) => (
    <div>
        <h1>{item.title}</h1>
        <div className="card w-25 ">
        <img  className="card-img-top w-50"  src= {item.img} alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{item.titulo}</h5>
        <p className="card-text">{item.descripcion}</p>
        <h5 className="card-text">Cantidad = {item.valor} </h5>        
        <h5 className="card-text">Precio = ${item.precio}</h5>
        <button onClick={() => props.removeItem(item.id)}>Eliminar</button>
        </div>
        </div>
    </div>
        ))}
    </div>  
    );
}
export default CartContainer;

