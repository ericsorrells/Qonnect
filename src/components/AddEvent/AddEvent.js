// ========================================================================================
import React from 'react';
// ========================================================================================

// const AddEvent = (props) => {
//   function handleAddEvent(e) {
//     console.log('PROPS', this.props);
//     console.log('EVENT', e);
//     e.preventDefault();
//     props.addEvent(e.target.value)
//   }
//   return (
//     <div>
//       <form>
//         <input
//           type="text"
//           placeholder="Add Event"
//           onChange={this.handleAddEvent}
//         />
//         <button>Add Event</button>
//       </form>
//     </div>
//   )
// }
class AddEvent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { input: '' }
    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleAddEvent(e) {
    e.preventDefault();
    console.log('PROPS', this.props);
    // console.log('EVENT', e);
    this.props.addEvent(this.state.input)
  }

  handleInput(e) {
    e.preventDefault()
    console.log('HANDLE INPUT: ', e)
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddEvent}>
          <input
            type="text"
            placeholder="Add Event"
            onChange={this.handleInput}
          />
          <button>Add Event</button>
        </form>
      </div>
    )
  }
}

export default AddEvent;