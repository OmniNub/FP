import React from 'react';
import User from './User.js';

export default class UserList extends React.Component {

    render() {
        return(
            <React.Fragment>
                <div>
                {this.props.users.map((user) => 
                    <User 
                    user = {user}
                    userBeingEdited = {this.props.userBeingEdited}
                    beginEdit = {this.props.beginEdit}
                    updateFormField = {this.props.updateFormField}
                    state = {this.props.state}
                    confirmEdit = {this.props.confirmEdit}
                    cancelEdit = {this.props.cancelEdit}
                    deleteUser = {this.props.deleteUser}
                    />
                )}
                </div>
            </React.Fragment>
        )
    }
}