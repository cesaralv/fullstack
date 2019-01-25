import React, { Component } from 'react';

class AddFruit extends Component {

  render() {
    return (
      <div className="formContainer">
        <form className="fruitForm" >
          <div className="nameForm">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name" />
          </div>
          <div className="imageForm">
            <label htmlFor="imageUrl">Image</label>
            <input
              type="text"
              id="imageUrl" />
          </div>
          <div className="priceForm">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price" />
          </div>
          <div className="submitButton">
            <input type="submit" value="Añadir fruta"/>
          </div>
        </form>
      </div>
    );
  }
}

export default AddFruit;