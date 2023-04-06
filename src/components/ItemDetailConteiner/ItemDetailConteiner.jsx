import { useParams } from "react-router-dom";
import productosdata from "../../data/productosdata";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Flex from "../Flex/Flex";


function getSingleItem(idURL) { 
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        const encontrado = productosdata.find( item => {
          return (item.id === idURL )
        }) 
          resolve(encontrado);
      }, 1000);
    });
    return promesa;
  }
  
  function ItemDetailCointeiner () { 
      const [producto,setproductos] = useState ([]);
      let { id } = useParams()
      console.log ( id ); 
       useEffect(() => {
        getSingleItem( id ) .then((respuesta) => {
          setproductos(respuesta);
        });
    },
       []);
    return (
      <div className="card w-50">
        <img  className="card-img-top w-50"  src= {producto.img} alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{producto.titulo}</h5>
        <p className="card-text">{producto.descripcion}</p>
        <h1 className="card-text">{producto.precio}</h1>
      </div>
    </div>
);
      }
      

export default ItemDetailCointeiner;