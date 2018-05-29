// ========================================================================================
import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
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
        contentLabel="Example Modal"
        className="Modal"
      >
        <h3 className='modal__title modal__container'>
          Please Confirm You Wish To Accept This Event:
        </h3>
        <ShowEventDisplay event={this.props.event} />
        <form onSubmit={this.onFormSubmit} className='modal__container'>
          <label className='modal__label'>Acceptance Note:</label>
          <textarea
            onChange={this.onNoteInput}
            value={this.state.acceptanceNote}
            className='modal__textarea'
          />
          <br/>
          <button type='submit' className='button__purple modal__button'>
            Yes, I Accept!
          </button>
        </form>
      </Modal>
    )
  }
}

AcceptanceModal.propTypes = {
  modalOpen:       PropTypes.func,
  modalClose:      PropTypes.func,
  userAcceptEvent: PropTypes.func 
}

export default AcceptanceModal;