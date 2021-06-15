import React from 'react';
import './Card.css';
import './Update.css';
import Card from './Card.js';
import Create from './Create.js';
import  { Redirect,Link } from 'react-router-dom'

class Update extends Create{
    constructor(props){
        super(props)
        let num=this.props.num_excercise
        let json_
        for(let exercise of this.props.user[1])
            if(exercise.idEjercicio==num)
                json_=JSON.parse(exercise.JSON)
        let m1=json_.matrix
        let m2=json_.result

        this.state={
            orden :m1.length,
            option:json_.option,
            matrix:m1,
            result:m2,
            update:false,
            action:"Actualizar"
        }
    }
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
