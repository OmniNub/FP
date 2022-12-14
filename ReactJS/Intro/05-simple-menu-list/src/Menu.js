import React from 'react';

export default class Menu extends React.Component {

  state = {
    food: [
      {
        "_id": 101,
        "name": "Chicken Udon Soup",
        "price": 11.99,
        "ingredients": ["chicken stock", "udon", "chicken breast"]
      },
      {
        "_id": 203,
        "name": "Salmon Teriyaki Don",
        "price": 9.9,
        "ingredients": ["salmon", "rice", "soya sauce"]
      },
      {
        "_id": 401,
        "name": "Raw Salmon Slices",
        "price": 15.99,
        "ingredients": ["salmon"]
      },
      {
        "_id": 402,
        "name": "Chicken Miso Ramen",
        "price": 15.99,
        "ingredients": ["chicken", "miso", "ramen"]
      }
    ],
    searchTerms: ""
  }

  renderitem() {
    let itemlist = [];
    let allingredients = [];
    for (let s of this.state.food) {

      let ingredientslist = []
      for (let n of s.ingredients) {
        ingredientslist.push(<li key={n}>{n}</li>)
        allingredients.push(<li key={n}>{n}</li>)
      }

      if (
        this.state.searchTerms === "" || s.name.toLowerCase().includes(this.state.searchTerms.toLowerCase())
      )

        
      itemlist.push(<div key={s._id}>
        <h3>{s.name} (${s.price})</h3>
        <ul>{ingredientslist}</ul>

      </div>
      )

      console.log(allingredients)
    }
    return itemlist;
  }

  render() {
    return (
      <React.Fragment>
        <input
          type = 'text'
          value = {this.state.searchTerms}
          placeholder = 'Search food item...'
          onChange={(e) => {
            this.setState({
              searchTerms: e.target.value
            })
          }} /><br></br>
        <input
          type = 'text'
          value = {this.state.searchTerms}
          placeholder = 'Filter by ingredients'
          onChange={(e) => {
            this.setState({
              searchTerms: e.target.value
            })
          }} />
        <h1>Menu</h1>
        {this.renderitem()}
      </React.Fragment>
    )
  }


}