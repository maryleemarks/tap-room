import React from "react";
import kombucha from './../img/kombucha.jpg';

function Header(){
  return (
    <React.Fragment>
      <h1>Welcome to the Kombucha Tap Room</h1>
      <img src={kombucha} alt="an image of kombucha taps"/>
    </React.Fragment>
  );
}

export default Header;