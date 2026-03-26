import React, { Component } from "react";

class ItemList extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    this.setState({ items: ["Manzanas", "Pan"] });
  }

  addItem = (item) => {
    this.setState((prevState) => ({
      items: [...prevState.items, item] 
    }));
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemList;