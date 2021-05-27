import React from 'react';
import './Card.css';

class Card extends React.Component{
    render(){
        return <div className="card">
            <div className="card-title">
                {this.props.title}
            </div>
            </div>
    }
}

export default Card;
