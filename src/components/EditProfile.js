// ========================================================================================
import React from 'react';
import PropTypes from 'prop-types';
// ========================================================================================

class EditProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name:        '',
      birthday:    '',
      location:    '',
      joinedOn:    '',
      description: ''
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addProfile({
      name:        this.state.name,
      location:    this.state.location,
      description: this.state.description
    });
    this.setState({ name: '', location: '', description: '' })
  }

  handleNameChange(e) {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  handleLocationChange(e) {
    e.preventDefault();
    this.setState({ location: e.target.value });
  }

  handleDescriptionChange(e) {
    e.preventDefault();
    this.setState({ description: e.target.value });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type        = "text"
            placeholder = "Add Your Name"
            value       = {this.state.name}
            onChange    = {this.handleNameChange}
          />
          <br/>
          <input
            type        = "text"
            placeholder = "Add Your Location"
            value       = {this.state.location}
            onChange    = {this.handleLocationChange}
          />
          <br/>
          <textarea
            type        = "text"
            placeholder = "Add Description"
            value       = {this.state.description}
            onChange    = {this.handleDescriptionChange}
          />
          <br/>
          <button>Add Profile</button>
        </form>
      </div>
    )
  }
}

EditProfile.propTypes = {
  profile: PropTypes.object
}

export default EditProfile;