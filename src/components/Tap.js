import React from "react";
import PropTypes from "prop-types";

function Tap(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTapClicked(props.id)}>
        <h3>{props.name} - {props.brand}</h3>
        <p><em>{props.flavor}</em></p>
        <p><em>{props.price}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Event.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  flavor: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  whenEventClicked: PropTypes.func
};

export default Tap;