import React from 'react';
import NewTapForm from './NewTapForm';
import TapList from './TapList';
import TapDetail from './TapDetail';
import EditTapForm from './EditTapForm';

class TapControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTapList: [],
      selectedTap: null,
      editing: false

    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.selectedTap != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTap: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewTapToList = (newTap) => {
    console.log("handleAddNew reached!");
    const newMainTapList = this.state.mainTapList.concat(newTap);
    this.setState({mainTapList: newMainTapList,
                  formVisibleOnPage: false });
  }

  handleChangingSelectedTap = (id) => {
    const selectedTap = this.state.mainTapList.filter(tap => tap.id === id)[0];
    this.setState({selectedTap: selectedTap});
  }

  handleDeletingTap = (id) => {
    const newMainTapList = this.state.mainTapList.filter(tap => tap.id !== id);
    this.setState({
      mainTapList: newMainTapList,
      selectedTapt: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingTapInList = (tapToEdit) => {
    const editedMainTapList = this.state.mainTapList
      .filter(tap => tap.id !== this.state.selectedTap.id)
      .concat(tapToEdit);
    this.setState({
        mainTapList: editedMainTapList,
        editing: false,
        selectedTap: null
      });
  }

  handleSellTap = (id) => {
    if (this.state.mainTapList.length >1){
      const selectedTap = this.state.mainTapList.filter(tap => tap.id === id) [0]
      if (selectedTap.pints > 1){
        selectedTap.pints --;
        const newMainTapList = this.state.mainTapList.filter(tap => tap.id !== id).concat(selectedTap)
        this.setState({
            mainTapList: newMainTapList
        });
      } else {
        return "You can't do that"
      }
      
    } else {
      const selectedTap = this.state.mainTapList.filter(tap => tap.id === id)[0]
      if (selectedTap.pints > 1){
        selectedTap.pints --;
        const newTapListArray = [] 
        const changedTapArray = newTapListArray.concat(selectedTap)
        this.setState({
          mainTapList: changedTapArray
        });
      } else {
        const error= "You can't do that";
        return error;
      }
      

      
    }
    
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing ) {      
      currentlyVisibleState = <EditTapForm tap = {this.state.selectedTap} onEditTap = {this.handleEditingTapInList} />
      buttonText = "Return to Tap List";
    } else if (this.state.selectedTap != null) {
      currentlyVisibleState = <TapDetail tap = {this.state.selectedTap} onClickingDelete = {this.handleDeletingTap} onClickingEdit = {this.handleEditClick} onClickingSell = { this.handleSellTap}/>
      buttonText = "Return to Tap List";
    } else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewTapForm onNewTapCreation={this.handleAddingNewTapToList}  />;
      buttonText = "Return to Tap List";
    } else {
      currentlyVisibleState = <TapList tapList={this.state.mainTapList} onTapSelection={this.handleChangingSelectedTap} />;
      buttonText = "Add Tap";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }

}

export default TapControl;