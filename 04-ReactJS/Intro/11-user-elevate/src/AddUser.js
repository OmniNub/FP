import React from 'react';

export default function AddUser(props) {


    
    return (
        <React.Fragment>
            <div>
        <input
          type="text"
          placeholder="User name"
          value={props.newUserName}
          onChange={props.updateFormField}
          name="newUserName"
        />
        <input
          type="text"
          placeholder="User email"
          value={props.newUserEmail}
          onChange={props.updateFormField}
          name="newUserEmail"
        />
        <button onClick={props.addUser}>Add</button>
        </div>
      </React.Fragment>
    )
}