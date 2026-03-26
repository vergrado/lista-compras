// Importa React y Component (para crear componente de clase)
import React, { Component } from "react";

// Importa los otros componentes
import Title from "./componentes/Title";
import ItemForm from "./componentes/ItemForm";
import ItemList from "./componentes/ItemList";

// Componente principal de la aplicación
class App extends Component {

  // Constructor necesario para inicializar refs
  constructor(props) {
    super(props);

    // Creamos una referencia para acceder al componente ItemList
    this.itemListRef = React.createRef();
  }

  render() {
    return (
      <div>

        {/* Componente estático (solo muestra título) */}
        <Title />

        {/* 
          Componente formulario
          Se le pasa la función addItem como prop
          Esta función llama al método addItem del componente ItemList
        */}
        <ItemForm 
          addItem={(item) => this.itemListRef.current.addItem(item)} 
        />

        {/* 
          Componente de lista
          ref permite acceder a sus métodos desde el padre (App)
        */}
        <ItemList ref={this.itemListRef} />

      </div>
    );
  }
}

// Exporta el componente principal
export default App;