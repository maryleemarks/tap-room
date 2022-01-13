import React from "react";
import Header from "./Header";
import TapControl from "./TapControl";

function App(){
  const name = "Gingeraid";
  const name2 = "Rose Garden";
  return (
    <React.Fragment>
      <Header />
      <EventControl />
    </React.Fragment>
  );
}

export default App;
