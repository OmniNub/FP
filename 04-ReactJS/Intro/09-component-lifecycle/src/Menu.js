import React from 'react';
import axios from "axios";

export default class Menu extends React.Component {


  state = {
    food: []
  }

  async componentDidMount() {
    console.log('ComponentDidMount')
    const foodResponse = await axios.get("food.json");
    const foodData = foodResponse.data;
    this.setState({
      food: foodData
    })
    console.log(this.state.food);
  }

  renderitem() {
    let itemlist = [];
    for (let s of this.state.food) {
      console.log(s.name)
      let ingredientslist = []
      for (let n of s.ingredients) {
        ingredientslist.push(<li key={n}>{n}</li>)
      }

      itemlist.push(<div key={s._id}>
        <h3>{s.name}</h3>
        <ul>{ingredientslist}</ul>
        {s.price}
      </div>
      )

    }
    console.log(itemlist)
    return itemlist;
  }

  render() {
    return (
      <React.Fragment>
        <h1>Menu</h1>
        {this.renderitem()}
      </React.Fragment>
    )
  }


}