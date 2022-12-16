import React from 'react';

export default class SurveyForm extends React.Component {
    state={
        'name':'',
        'colour':'',
        'country':''
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })}

    render() {
        return(
            <React.Fragment>
                <div>
                    <label>Name:</label>
                    <input name='name' type='text' value={this.state.name} onChange={this.updateFormField}/>
                </div>
                <div>
                    <label>Favourite Colour:</label>
                    <input name='colour' type='radio' value='red' checked={this.state.colour==='red'} onChange={this.updateFormField}/>Red

                    <input name='colour' type='radio' value='blue' checked={this.state.colour==='blue'} onChange={this.updateFormField}/>Blue

                    <input name='colour' type='radio' value='green' checked={this.state.colour==='green'} onChange={this.updateFormField}/>Green
                </div>
                <div>
                    <label>Country:</label>
                    <select name='country' value={this.state.country} onChange={this.updateFormField}>
                        <option value='singapore'>Singapore</option>
                        <option value='malaysia'>Malaysia</option>
                        <option value='indonesia'>Indonesia</option>
                    </select>
                </div>
                <button>Submit</button>


            </React.Fragment>
        )
    }
}