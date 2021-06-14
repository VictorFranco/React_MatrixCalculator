import React from 'react';
import './Card.css';
import './Update.css';
import Card from './Card.js';
import Create from './Create.js';
import  { Redirect,Link } from 'react-router-dom'

class Update extends Create{
    save(e){
        e.preventDefault()
        console.log(this.props.title)
        //console.log(this.state)
        let info={
            option:this.state.option,
            matrix:this.state.matrix,
            result:this.state.result
        }
        let num=this.props.num_excercise
        let url='http://localhost:8080/CRUD/Update?'
            url+=`exercise=${num}&`
            url+=`JSON=${JSON.stringify(info)}`
        console.log(url)
        fetch(url)
           .then(response => response.text())
           .then(data => {
               let infomation=JSON.parse(data)
               this.props.set_user_info(infomation)
               this.setState({update:true})
           })
    }
}

export default Update;
