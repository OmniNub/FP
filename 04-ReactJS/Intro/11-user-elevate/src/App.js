import logo from './logo.svg';
import './App.css';
import React from 'react';
import UserList from './UserList';
import AddUser from './AddUser';


export default class App extends React.Component {
  state = {
    users: [
      {
        _id: Math.floor(Math.random() * 10000),
        name: "Jon Snow",
        email: "jonsnow@winterfell.com"
      },
      {
        _id: Math.floor(Math.random() * 10000),
        name: "Ned Stark",
        email: "nedstark@winterfell.com"
      },
      {
        _id: Math.floor(Math.random() * 10000),
        name: "Frodo Baggins",
        email: "frodo@bagend.com"
      }
    ],
    newUserName: "",
    newUserEmail: "",
    userBeingEdited: 0,
    editedUserName: "",
    editedUserEmail: ""
  };



  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addUser = () => {
    this.setState({
      users: [
        ...this.state.users,
        {
          _id: Math.floor(Math.random() * 10000),
          name: this.state.newUserName,
          email: this.state.newUserEmail
        }
      ]
    });
  };

    beginEdit = (user) => {
    this.setState({
      userBeingEdited: user._id,
      editedUserEmail: user.email,
      editedUserName: user.name
    });
  };

  cancelEdit = () => {
    this.setState({
      userBeingEdited: 0
    });
  };

  confirmEdit = (user) => {

    let index = this.state.users.findIndex((u) => u._id === user._id);
    this.setState({
      users: [
        ...this.state.users.slice(0, index),
        {
          ...user,
          email: this.state.editedUserEmail,
          name: this.state.editedUserName
        },
        ...this.state.users.slice(index + 1)
      ],
      userBeingEdited: 0
    });
  };

  deleteUser = (user) => {

    let index = this.state.users.findIndex((u) => u._id === user._id);
    this.setState({
      users: [...this.state.users.slice(0, index), ...this.state.users.slice(index + 1)]
    });
  };

  render() {
    return(
      <React.Fragment>
      <div>
      <UserList 
        users = {this.state.users}
        userBeingEdited = {this.state.userBeingEdited}
        beginEdit = {this.beginEdit}
        updateFormField = {this.updateFormField}
        state = {this.state}
        confirmEdit = {this.confirmEdit}
        cancelEdit = {this.cancelEdit}
        deleteUser = {this.deleteUser}
      /><br></br>
      <AddUser 
        newUserName = {this.state.newUserName}
        newUserEmail = {this.state.newUserEmail}
        updateFormField = {this.updateFormField}
        addUser = {this.addUser}
      />
      </div>
      </React.Fragment>
    )
  }
}