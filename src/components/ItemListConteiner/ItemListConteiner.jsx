import Flex from "../Flex/Flex";
import Item from "../Item/index";
import productosdata from "../../data/productosdata";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function getItems() { 
  const promesa = new Promise((resolve) => {
    setTimeout(() => { 
        resolve(productosdata);
    }, 2500);
  });
  return promesa;
}
function getItemsPorCategoria(categoriaURL) { 
  const promesa = new Promise((resolve) => {
    setTimeout(() => { 
      const filtro = productosdata.filter(
        (item)  => item.categoria === categoriaURL
      );
      resolve(filtro);
    }, 1000)
  });
  return promesa;
}

function ItemListCointeiner () {
    const [productos,setproductos] = useState ([]);
    const { categoriaid } = useParams();
     useEffect(() => {
      if (categoriaid === undefined) {
      getItems().then((respuesta) => {
        setproductos(respuesta);
      })}
      else {
        getItemsPorCategoria(categoriaid).then((respuesta) =>
        setproductos(respuesta))
      }
     }
     )
    return (
        <Flex>
          {productos.map((productos) =>(
          <Item
          key={productos.id}
          id={productos.id}
          titulo={productos.titulo}
          precio={productos.precio}
          descripcion={productos.descripcion}
          categoria={productos.categoria}
          img={productos.img}
          />
          ))}
        </Flex>
 );
}
export default ItemListCointeiner;
