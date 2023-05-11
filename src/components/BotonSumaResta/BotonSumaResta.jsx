import React, { useState } from 'react';

function BotonSumaResta(props) {
  const [valor, setValor] = useState(1);

  function sumar() {
    setValor(valor + 1);
  }

  function restar() {
    if (valor > 0) {
      setValor(valor - 1);
    }
  }

  return (
    <div>
      <button onClick={restar}>-</button>
      <span>{valor}</span>
      <button onClick={sumar}>+</button>
      <button onClick={() => props.onAdd(valor)}>
        Agregar al Carrito
      </button>
    </div>
  );
}
export default BotonSumaResta;