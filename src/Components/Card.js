import React from 'react';
import './Card.css';
import Field from './Field.js';
import  { Redirect } from 'react-router-dom'
import axios from "axios";

class Card extends React.Component{
    constructor(props){
        super(props)
        this.state={}
        this.props.campos.map(element=>this.setState({[element]:""}))
        if(this.props.info!=null)
            this.state=this.props.info
        this.setState({send:false})
    }
    onSubmit(e){
        e.preventDefault()
        console.log(this.props.title)
        //console.log(this.state)
        let dir=''
        if(this.props.title=='Iniciar Sesion') dir='Login'
        let url='http://localhost:8080/CRUD/'+dir+'?'
        let array=[]
        Object.entries(this.state).forEach(
            ([key, value]) => array.push(key+"="+value)
        );
        url+=array.join("&")
        console.log(url)
        axios.post(url)
           .then(response => response.data)
           .then(data => {
               this.props.set_user_info(data)
               if(data!="") this.setState({send:true})
           })
    }
    addInfo(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        if(this.state.send==true)
            return (<Redirect to="/CRUD/Info" />);
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
                            state={this.state[element]}/>
                })}
                <div className="btn">
                <button type="submit">Enviar</button>
                </div>
            </form>
            </div>);
    }
}

export default Card;
