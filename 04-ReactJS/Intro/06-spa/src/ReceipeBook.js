import React from 'react';

export default class RecipeBook extends React.Component {

    state = {
        data: [
            {
                id: 1,
                title: "Chicken Rice",
                ingredients: ['rice', 'chicken', 'oil']
            },            {
                id: 2,
                title: "Laksa",
                ingredients: ['noodles', 'chicken', 'chilli', 'cockles']
            },            {
                id: 3,
                title: "prata",
                ingredients: ['egg', 'dough', 'oil']
            }
        ]
    }

    render() {
        return (
            <React.Fragment>
            <div className="container">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <button className="nav-link active" aria-current="page">
                    Recipes
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link">Add New</button>
            </li> </ul>
          </div>
          </React.Fragment>
        )
    }

}