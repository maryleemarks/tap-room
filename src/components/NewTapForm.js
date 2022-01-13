import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewTapForm(props){
  
  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    props.onNewTapCreation({name: event.target.name.value, brand: event.target.brand.value, flavor: event.target.flavor.value, price: event.target.price.value, pints: event.target.pints.value, id: v4()});
  }
  
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewTapFormSubmission}
        buttonText="Add Tap" />
    </React.Fragment>
  );
}




NewTapForm.propTypes = {
  onNewTapCreation: PropTypes.func
};

export default NewTapForm;