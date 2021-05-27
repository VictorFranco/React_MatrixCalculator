import React from 'react';
import './Field.css';

class Field extends React.Component{
    render(){
        return(
            <div className="field">
                <div>{this.props.name}: </div>
                <input type="text"/>
            </div>);
    }
}

export default Field;
