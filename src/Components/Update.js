import React from 'react';
import './Card.css';
import './Update.css';
import Card from './Card.js';
import  { Redirect,Link } from 'react-router-dom'

class Update extends React.Component{
    constructor(props){
        super(props)
        this.state={}
        for(let key in this.props.info[0])
            this.setState({[key]:this.props.info[key]})
    }
    render(){
    let id=this.props.info[0]["id"]
    delete this.props.info[0]["id"]
    let aux=[]
    aux.push(this.props.info[0])
    let campos=Object.keys(aux[0]).reverse()
    let information=aux[0]
    return(
        <div className="update">
            <div className="content">
            <div className="title">Consultar</div>
            <div className="cards alinear">
                <Card
                    title="Informacion"
                    campos={campos}
                    id_={id}
                    info={information}/>
                <div className="btn">
                    <Link className="button" to="/CRUD/Info">Return</Link>
                </div>
            </div>
            </div>
        </div>
    );}
}

export default Update;
