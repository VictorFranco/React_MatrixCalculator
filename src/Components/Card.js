import React from 'react';
import './Card.css';
import Field from './Field.js';

class Card extends React.Component{
    constructor(props){
        super(props)
        this.state={}
        this.props.campos.map(element=>this.setState({[element]:""}))
    }
    onSubmit(e){
        e.preventDefault()
        console.log(this.props.title)
        console.log(this.state)
    }
    addInfo(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(<div className="card">
            <div className="card-title">
                {this.props.title}
            </div>
            <form method="post" className="form" onSubmit={this.onSubmit.bind(this)}>
                {this.props.campos.map((element,index)=>{
                    return <Field
                            name={element}
                            key={index}
                            addInfo={this.addInfo.bind(this)}
                            state={this.state.element}/>
                })}
                <div className="btn">
                <button type="submit">Enviar</button>
                </div>
            </form>
            </div>);
    }
}

export default Card;
