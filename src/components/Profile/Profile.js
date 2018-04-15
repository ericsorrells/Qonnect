// ========================================================================================
import React from 'react';
// ========================================================================================
import { showEvents } from '../../utils/displayUtils';
// ========================================================================================

const Profile = (props) => {
  return(
    <div>
        { props.events && (<ul> { showEvents(props.events) } </ul>) }
    </div>
  )
}

// class Profile extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div>
//         {this.props.events && (<ul> {showEvents(this.props.events)} </ul>)}
//       </div>
//     )
//   }
// }
export default Profile;