// Importa React y herramientas necesarias
import React, { Component, useState } from "react"; 
// Component no se usa aquí (es para clases), useState sí (hook para estado)

// Componente funcional que recibe la prop addItem desde el padre
function ItemForm({ addItem }) {

  // Hook de estado: 
  // "item" guarda el valor del input
  // "setItem" permite actualizar ese valor
  const [item, setItem] = useState('');

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {

    // Evita que la página se recargue al enviar el formulario
    e.preventDefault();

    // Validación: si el input está vacío, no hace nada
    if (item.trim() === '') return;

    // Llama a la función que viene del padre (props)
    // y le envía el nuevo artículo
    addItem(item);

    // Limpia el campo de texto después de agregar el artículo
    setItem('');
  };

  // JSX: estructura visual del componente
  return (

    // Formulario que ejecuta handleSubmit al enviarse
    <form onSubmit={handleSubmit}>

      {/* Campo de texto */}
      <input
        type="text" // tipo texto
        value={item} // valor controlado por el state
        onChange={(e) => setItem(e.target.value)} 
        // cada vez que el usuario escribe, actualiza el state

        placeholder="Añadir artículo" // texto de ayuda
      />

      {/* Botón para enviar el formulario */}
      <button type="submit">Agregar</button>

    </form>
  );
}

// Exporta el componente para poder usarlo en otros archivos (como App.js)
export default ItemForm;