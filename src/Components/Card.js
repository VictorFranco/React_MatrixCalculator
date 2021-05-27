import React from 'react';
import './Card.css';
import Field from './Field.js';

class Card extends React.Component{
    render(){
        return(<div className="card">
            <div className="card-title">
                {this.props.title}
            </div>
            <form method="post" className="form">
                {this.props.campos.map((e,index)=>{
                    return <Field
                            name={e}
                            key={index}/>
                })}
                <div className="btn">
                <button type="submit">Enviar</button>
                </div>
            </form>
            </div>);
    }
}

export default Card;
