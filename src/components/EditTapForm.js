import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditTapForm(props){
  const { tap } = props;

  function handleEditTapFormSubmission(event) {
    event.preventDefault();
    props.onEditTap({name: tap.target.name.value, brand: tap.target.brand.value, flavor: tap.target.flavor.value, price: tap.target.price.value, pints: tap.target.pints.value, id: event.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditTapFormSubmission} 
        buttonText="Update Tap" />
    </React.Fragment>
  );
}

EditTapForm.propTypes = {
  tap: PropTypes.object,
  onEditTap: PropTypes.func
};

export default EditTapForm;