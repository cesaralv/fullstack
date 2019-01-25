import React, { Component } from 'react';

class Header extends Component {
  render() {
    return <header className="header">
              <nav>
                <ul className="navBarContainer">
                  <li className="navBarItem">
                    <a href="#perfil">Perfil</a>
                  </li>
                  <li className="navBarItem active">
                    <a href="#home">Proteco Store</a>
                  </li>
                  <li className="navBarItem">
                    <a href="#shop">Shop</a>
                  </li>
                </ul>
              </nav>
            </header>;
  }
}

export default Header;