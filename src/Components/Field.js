import React from 'react';
import './Field.css';

class Field extends React.Component{
    render(){
        return(
            <div className="field">
                <div>{this.props.name}: </div>
                <input type="text"
                    onChange={this.props.addInfo}
                    name={this.props.name}
                    value={this.props.state}/>
            </div>);
    }
}

export default Field;
