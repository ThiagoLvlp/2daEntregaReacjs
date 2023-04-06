import React, { useState } from 'react';

function BotonSumaResta() {
  const [valor, setValor] = useState(0);

  const stock = 200

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
    </div>
  );
}

export default BotonSumaResta;