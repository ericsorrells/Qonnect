// ========================================================================================
import React from 'react';
import Modal from 'react-modal';
// ========================================================================================
import ShowEventDisplay from '../components/ShowEventDisplay';
// ========================================================================================

class AcceptanceModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      acceptanceNote: ''
    }

    this.onNoteInput = this.onNoteInput.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onNoteInput(e) {
    event.preventDefault();
    this.setState({ acceptanceNote: e.target.value })
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.userAcceptEvent({
      acceptanceNote: this.state.acceptanceNote
    })
  }

  render(){
    return (
      <Modal
        isOpen={this.props.modalOpen}
        onRequestClose={this.props.closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Pleases Confirm You Wish To Accept This Event:</h2>
        <ShowEventDisplay event={this.props.event} />
        <form onSubmit={this.onFormSubmit}>
          <label>Acceptance Note:</label>
          <textarea
            onChange={this.onNoteInput}
            value={this.state.acceptanceNote}
          />
          <button type='submit'>Yes, I Accept!</button>
        </form>
      </Modal>
    )
  }
}

export default AcceptanceModal;