import { Link } from "react-router-dom";
function Item(props) { 
  console.log(props);
  console.log(props.id);
    return (
        <div className="card w-75">
        <img  className="card-img-top w-50"  src= {props.img} alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.titulo}</h5>
          <p className="card-text">{props.descripcion}</p>
          <h1 className="card-text">${props.precio}</h1>
          <Link to={ `/detalle/${props.id}`} className="btn btn-primary">Ver Detalle</Link>
        </div>
      </div>
    )
}

export default Item;