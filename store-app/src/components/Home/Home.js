import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frutas: []
    }
  }

  componentWillMount() {
    axios.get('http://localhost:8080/api/frutas')
         .then((frutas) => {
            this.setState({frutas: frutas.data})
         });
  }

  render() {
    const { frutas } = this.state;
    return <div className="gridContainer">
            {
              frutas.length > 0 && frutas.map((fruta) => {
                return <div className="card">
                  <img src={fruta.imageUrl} alt="Random" />
                  <div>
                    <span>Nombre: {fruta.name}</span>
                    <span>Precio: {fruta.price}$</span>
                  </div>
                </div>
              })
            }
          </div>;
  }
}

export default Home;