import React from 'react';
import App from './App';
import EditUser from './EditUser';

export default class User extends React.Component {


    render() {
        return(
           <React.Fragment>
            
            <div class='box'>
{this.props.user._id === this.props.userBeingEdited
? <EditUser 
updateFormField = {this.props.updateFormField}
state = {this.props.state}
confirmEdit = {this.props.confirmEdit}
cancelEdit = {this.props.cancelEdit}
user = {this.props.user}
/>
: 
                <div>
                <h2>{this.props.user.name}</h2>
                <h3>{this.props.user.email}</h3>
                <button
              onClick={() => {
                this.props.beginEdit(this.props.user);
              }}
            >
              Update
            </button>
            <button
              onClick={() => {
                this.props.deleteUser(this.props.user);
              }}
            >
              Delete
            </button>
                </div>
    }
               
               
           </div>
            </React.Fragment>
        )
    }
}