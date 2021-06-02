import React from 'react';
import './Card.css';
import './Show.css';
import Card from './Card.js';
import  { Redirect,Link } from 'react-router-dom'

class Show extends React.Component{
    constructor(props){
        super(props)
        this.state={}
        for(let key in this.props.info[0])
            this.setState({[key]:this.props.info[key]})
    }
    render(){
    let information=this.props.info[0]
    let aux=this.props.info[0]
    delete aux["id"]
    let campos=Object.keys(aux).reverse()
    return(
        <div className="show">
            <div className="content">
            <div className="title">Consultar</div>
            <div className="cards btn">
                <Card
                    title="Informacion"
                    campos={campos}
                    info={information}/>
                <Link className="button" to="/CRUD/Info">Return</Link>
            </div>
            </div>
        </div>
    );}
}

export default Show;
