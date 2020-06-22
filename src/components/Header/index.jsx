import React from 'react';
import logo from '../../assets/images/latte.png';

function Header(props) {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={logo} height="22" />
        <a className="navbar-brand" href="/">{props.appName}</a>
      </nav>
      <br />
    </div>
  );
}

export default Header;
