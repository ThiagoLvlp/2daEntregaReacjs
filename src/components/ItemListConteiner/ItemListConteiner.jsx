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
        getItemsPorCategoria(categoriaid).then((respuesta) =>
        setproductos(respuesta));
      }
    },[categoriaid]);
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
