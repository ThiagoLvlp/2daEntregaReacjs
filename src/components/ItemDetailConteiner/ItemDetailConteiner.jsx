import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import BotonSumaResta from "../BotonSumaResta/BotonSumaResta";
import { cartContext } from "../../context/cartContext";
import { VerDetalle } from "../../services/dbfirebase";

function ItemDetailCointeiner (item) { 
      const [producto,setproductos] = useState ([]);
      let { id } = useParams();
      VerDetalle( id );

      const { cart, addItem } = useContext(cartContext)
      console.log("cart", cart)
      useEffect(() => {
        VerDetalle( id ).then((respuesta) => {
        setproductos(respuesta);
        });
        }, [id]);

  function handleAddToCart(valor){
    addItem(producto, valor)
    console.log("Agregaste 1 producto al carrito")
  }
    return (
      <div className="card w-50">
        <img  className="card-img-top w-50"  src= {producto.img} alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{producto.titulo}</h5>
        <p className="card-text">{producto.descripcion}</p>
        <h1 className="card-text">${producto.precio}</h1>
      </div>
      <BotonSumaResta onAdd={handleAddToCart}/>
      </div>
);
      }
      

export default ItemDetailCointeiner;