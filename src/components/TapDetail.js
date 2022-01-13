import React from "react";
import PropTypes from "prop-types";

function TapDetail(props){
  const { tap } = props;
  
  return (
    <React.Fragment>
      <h1>Tap Details</h1>
      <h3>{tap.name} - {tap.brand}</h3>
      <p><em>{tap.flavor}</em></p>
      <p><em>{tap.price}</em></p>
      <p><em>{tap.pints}</em></p>
      <button onClick={ ()=> props.onClickingEdit }>Update Tap</button>
      <button onClick={()=> props.onClickingDelete(tap.id) }>Delete Tap</button>
      <button onClick={()=> props.onClickingSell(tap.id) }>Sell a Pint</button>
      <hr/>
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func
};

export default TapDetail;