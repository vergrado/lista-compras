// Importa React y Component
import React, { Component } from "react";

// Componente de clase
class ItemList extends Component {

  // Estado inicial
  state = {
    items: [] // arreglo de artículos
  };

  // Método del ciclo de vida
  componentDidMount() {

    // Se ejecuta cuando el componente se monta
    // Inicializa la lista con valores por defecto
    this.setState({
      items: ["Manzanas", "Pan"]
    });
  }

  // Método para agregar un nuevo artículo
  addItem = (item) => {

    // setState con función para evitar errores de sincronización
    this.setState((prevState) => ({

      // Agrega el nuevo item al arreglo existente
      items: [...prevState.items, item]

    }));
  };

  render() {
    return (
      <div>

        {/* Lista de artículos */}
        <ul>

          {/* Recorre el arreglo items */}
          {this.state.items.map((item, index) => (

            // Cada item necesita una key única
            <li key={index}>{item}</li>

          ))}

        </ul>

      </div>
    );
  }
}

// Exporta el componente
export default ItemList;