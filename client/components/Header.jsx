import React from 'react';
import ReactSVG from 'react-svg'
import styles from './../styles/Header.scss';
// import logo from './../assets/ogql.svg';
// var logo = require('svg-inline-loader?./../../client/assets/ogql.svg');

const Header = () => {
  return (
    <div id="header">
      <ReactSVG className="logo-wrapper" svgClassName="logo" src={'./../../build/assets/ogql.svg'} />
      <h1>Orpheus GQL</h1>
    </div>
  )
};

export default Header;