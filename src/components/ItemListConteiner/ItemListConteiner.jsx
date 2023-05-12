import Flex from "../Flex/Flex";
import Item from "../Item/index";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemsPorCategoria, getItems_ } from "../../services/dbfirebase";

function ItemListCointeiner () {
    const [productos,setproductos] = useState ([]);
    const { categoriaid } = useParams();
      useEffect(() => {
        if (categoriaid === undefined) {
        getItems_().then((respuesta) => {
        setproductos(respuesta);
      })}
      else {
        getItemsPorCategoria(categoriaid).then((respuesta) => {
        setproductos(respuesta)});
      }
    },[categoriaid]);
    return (
        <Flex>
          {productos.map((item) =>{
            // console.log(item)
            console.log(item.id)
            const producto = <Item
            key={item.id}
            id={item.id}
            titulo={item.titulo}
            precio={item.precio}
            descripcion={item.descripcion}
            categoria={item.categoria}
            img={item.img}
            /> 
            return producto
          })}
        </Flex>
);
}
export default ItemListCointeiner;
