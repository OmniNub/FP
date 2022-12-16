import React from 'react';

export default class MallDirectory extends React.Component {

    state = {
        shops: [ {
            "id": 1,
            "name":"Macdonalds",
            "floor": 1,
            "unit":202,
            "type":"F&B"
     }, {
            "id":2,
            "name":"Coffee Beans",
            "floor": 2,
            "unit":301,
            "type":"F&B"
     }, {
            "id": 3,
            "name":"Uniqlo",
            "floor": 1,
            "unit":101,
            "type":"Clothing"
     }, {
            "id": 4,
            "name":"Starbucks",
            "floor": 1,
            "unit":109,
            "type":"F&B"
     }, {
        "id": 5,
        "name":"Best Denki",
        "floor": 3,
        "unit":402,
        "type":"Electronics"
     }, {
                    "id": 6,
     "name":"Don Don Donki",
     "floor": 5,
     "unit":103,
     "type":"Supermarket"} ],

     searchType: "",
     searchFloor: ""
    }

    renderShops() {
        let jsx = [];

        for (let s of this.state.shops) {
            jsx.push(<div key = {s.id} style={{
                border: "2px solid black",
                margin: "5px",
                padding: "5px"
            }}>
                <h3>{s.name}</h3>
                <ul>
                    <li>Unit Number: #{s.floor}-{s.unit}</li>
                    <li>Type: {s.type}</li>
                </ul>
                </div>)
        }
        return jsx;
    }

    render () {
        return (
            <React.Fragment>
            <h1>Mall Directory</h1>
            <div className='card col-6'>
            <input
          type = 'text'
          value = {this.state.searchType}
          placeholder = 'Search by type...'
          onChange={(e) => {
            this.setState({
              searchType: e.target.value
            })
          }} />
            </div>

            <div className='card col-6'>
            <input
          type = 'text'
          value = {this.state.searchFloor}
          placeholder = 'Search by floor...'
          onChange={(e) => {
            this.setState({
              searchFloor: e.target.value
            })
          }} />
            </div>

            <div className='col-6' > 
                {this.state.shops
                .filter(
                    (s) => 
                s.type
                .toUpperCase()
                .includes(this.state.searchType.toUpperCase()), 
                
                (s)=>s.floor.includes(this.state.searchFloor))
                
                .map((s) => (
                
                <div key = {s.id} style={{
                border: "2px solid black",
                margin: "5px",
                padding: "5px"
            }} >
                <h3>{s.name}</h3>
                <ul>
                    <li>Unit Number: #{s.floor}-{s.unit}</li>
                    <li>Type: {s.type}</li>
                </ul>
                </div>
                ))}
            </div>
            

            
            </React.Fragment>
        )
    }
}