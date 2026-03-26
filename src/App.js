import React, { Component } from "react";
import Title from "./componentes/Title";
import ItemForm from "./componentes/ItemForm";
import ItemList from "./componentes/ItemList";

class App extends Component {

  constructor(props) {
    super(props);

    // Forma correcta de usar refs
    this.itemListRef = React.createRef();
  }

  render() {
    return (
      <div>
        <Title />

        {/* Enviamos el método correctamente */}
        <ItemForm addItem={(item) => this.itemListRef.current.addItem(item)} />

        {/* Nombre correcto del componente + ref moderno */}
        <ItemList ref={this.itemListRef} />
      </div>
    );
  }
}

export default App;