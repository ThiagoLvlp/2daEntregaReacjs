import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { createOrden } from "../../services/dbfirebase";
import swal from 'sweetalert';
// import { useNavigate } from "react-router-dom";

function CartContainer(props) {
    const context = useContext(cartContext)
    const { cart, getTotalPrice } = context;
    // const navigateTo = useNavigate()

async function handleCheckout(){ 
    const orden= {
        items: cart, 
        buyer: { name: "Thiago"},
        date: new Date(), 
        total: getTotalPrice(),
    }
    const ordenId = await createOrden(orden);
    const ordenComplete = await swal({
        title: "Gracias por su compra",
        text: "Se realizo la compra con éxito. Su numero de referencia es : " + ordenId,
        icon: "success",
        dangerMode: true,
    });
    // navigateTo(`/checkout/${ordenId}`)
}
    return (
    <div>
        <h2 className="text-center ">Carrito de compras</h2>
        {cart.map((item) => (         
    <div>
        <h1>{item.title} </h1>
        <div className="card w-25 ">
        <img  className="card-img-top w-50"  src= {item.img} alt="..."/>
        <div className="card-body ">
        <h5 className="card-title">{item.titulo}</h5>
        <p className="card-text">{item.descripcion}</p>
        <h5 className="card-text">Cantidad = {item.valor} unidades </h5>        
        <h5 className="card-text">Precio Unitario = ${item.precio}</h5>
        <h5 className="card-text">Total = ${item.valor*item.precio}</h5>
        <button className="text-center">Eliminar Producto</button>
        </div>
        </div>
    </div>
        ))}
        <h2 className="text-aling">El Total de tu compra es ....</h2>
        <button onClick={handleCheckout}>Finalizar Compra</button>
    </div>  
    );
}
export default CartContainer;


