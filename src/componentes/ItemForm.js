// Importa React y useState (hook para manejar estado)
import React, { useState } from "react";

// Componente funcional que recibe la prop addItem
function ItemForm({ addItem }) {

  // Estado para guardar lo que escribe el usuario
  const [item, setItem] = useState('');

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {

    // Evita que la página se recargue
    e.preventDefault();

    // Validación: evita agregar texto vacío
    if (item.trim() === '') return;

    // Llama a la función del padre (App)
    addItem(item);

    // Limpia el input
    setItem('');
  };

  return (

    // Evento onSubmit del formulario
    <form onSubmit={handleSubmit}>

      {/* Input controlado */}
      <input
        type="text"
        value={item} // valor viene del estado
        onChange={(e) => setItem(e.target.value)} 
        // actualiza el estado cada vez que se escribe

        placeholder="Añadir artículo"
      />

      {/* Botón para enviar */}
      <button type="submit">Agregar</button>

    </form>
  );
}

// Exporta el componente
export default ItemForm;