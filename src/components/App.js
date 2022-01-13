import React from "react";
import Header from "./Header";
import TapControl from "./TapControl";

function App(){
  const name = "Ginger";
  const name2 = "Lemon";
  return (
    <React.Fragment>
      <Header />
      <EventControl />
    </React.Fragment>
  );
}

export default App;
