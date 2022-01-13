import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewTapForm(props){
  
  function handleNewTapFormSubmission(tap) {
    event.preventDefault();
    props.onNewTapCreation({name: tap.target.name.value, brand: tap.target.brand.value, flavor: tap.target.flavor.value, price: tap.target.price.value, pints: tap.target.pints.value, id: v4()});
  }
  
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewTapFormSubmission}
        buttonText="Add Tap" />
    </React.Fragment>
  );
}




NewEventForm.propTypes = {
  onNewEventCreation: PropTypes.func
};

export default NewTapForm;