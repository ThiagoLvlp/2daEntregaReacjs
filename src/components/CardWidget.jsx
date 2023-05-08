import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CardWidget = ({ onClick }) => {
  return (
    <div className="card-widget" onClick={onClick}>
      <FontAwesomeIcon icon={faShoppingCart}/> 
      <div className="card-widget-content">
      </div>
    </div>
  );
};

export default CardWidget;