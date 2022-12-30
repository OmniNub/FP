import React from 'react';

export default class TaskList extends React.Component{
    state = {
        'tasks' : [
            {
                id: 1,
                description: 'Walk the dog',
                done: false
            }, {
                id: 2,
                description: 'Wash the dishes',
                done: false
            }, {
                id: 3,
                description: 'Clean the kitchen',
                done: false
            }, {
                id: 4,
                description: 'Do groceries',
                done: false
            }, {
                id: 5,
                description: 'Launch Unicorn Startup',
                done: false
            }, 
        ],
        'newTaskName' : "",
        'taskBeingEdited': 0,
        'modifiedTaskName': '',
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    addTask = e => {
        let newTask = {
            'id' : Math.random() * 10000 + 9999,
            'description': this.state.newTaskName,
            'done' : false
        }
        let currentValues = this.state.tasks;


        let modifiedValues = [...currentValues,newTask];
        this.setState({
            'tasks': modifiedValues
        })
    }

    deleteTask = task_id => {
        let task_index = this.state.tasks.findIndex((t) => t.id === task_id);

        let modifiedTasks = [
            ...this.state.tasks.slice(0,task_index),
            ...this.state.tasks.slice(task_index+1)
        ];

        this.setState({
            tasks: modifiedTasks
        })
    }

    checkTask = (task_id) => {
        let currentTask = this.state.tasks.filter((t) => t.id === task_id)[0];
        let modifiedTask = {...currentTask};

        modifiedTask.done = !modifiedTask.done;
        
        let modifiedTaskList = this.state.tasks.map((t) => {
            if (t.id !== task_id) {
                return t
            } else {
                return modifiedTask
            }
        })

        this.setState({
            'tasks': modifiedTaskList
        })
    }

    displayedEditTask = t => {
        return (
            <li> <input
                    type="text"
                    name="modifiedTaskName"
                    value={this.state.modifiedTaskName}
                    placeholder="Enter new description"
                    onChange={this.updateFormField}
            />
                  <button
                    onClick={() => {
                      this.updateTask(t.id);
                      this.setState({
                        taskBeingEdited: 0
                      });
            }} >
            Update
                  </button>
                </li>
            );
    }

    displayTask = t => {
        return(
            <li key={t.id}>
                        {t.description}
                        <input type='checkbox' checked={t.done === true} onChange={() => {this.checkTask(t.id)}}></input>
                        
                        <button onClick={async () => {
                            this.setState({
                                taskBeingEdited: t.id,
                                modifiedTaskName: t.description
                            })
                        }}>Edit</button>


                        <button onClick={() => {
                            this.deleteTask(t.id);
                        }}>Delete</button>
                    </li>

        )
    }

    updateTask = task_id => {
        let currentTask = this.state.tasks.filter((t) => t.id === task_id)[0];
        let modifiedTask = {...currentTask};
        modifiedTask.description = this.state.modifiedTaskName;
        console.log(modifiedTask)
        let modifiedTasksList = this.state.tasks.map((t) => {
            if (t.id !== task_id) {
                return t;
            } else {
                return modifiedTask;
            }
        });

        this.setState({
            tasks: modifiedTasksList
        })
    }

    

    render() {
        return(
            <React.Fragment>
            <h1>Todo List</h1>

            <ul>
                {this.state.tasks.map((t) => (
                    this.state.taskBeingEdited !== t.id
                    ? this.displayTask(t)
                    : this.displayedEditTask(t)
                ))}
            </ul>

            <h2>Create New Task</h2>
            <div>
                <label>Task Description</label>
                <input 
                type="text" 
                name='newTaskName'
                value={this.state.newTaskName}
                onChange={this.updateFormField}></input>
                <button onClick={this.addTask}>Add</button>
            </div>
            </React.Fragment>
        )
    }
}