import React from 'react';
import './Info.css';
//import Field from './Field.js';
import  { Redirect } from 'react-router-dom'

class Info extends React.Component{
    constructor(props){
        super(props)
        this.state={}
        this.setState({create:false})
        this.setState({show:false})
        this.setState({update:false})
    }
    onSubmit(e){
        e.preventDefault()
        this.setState({create:true})
    }
    onSubmit_options(e){
        e.preventDefault()
        let id=e.target[0].value
        if(this.state.option=="1") this.show_(id)
        if(this.state.option=="2") this.update_(id)
        if(this.state.option=="3") this.delete_(id)
    }
    show_(id){
        let url="http://localhost:8080/CRUD/ShowInfo"
        console.log(url)
        fetch(url)
           .then(response => response.text())
           .then(data => {
               let infomation=JSON.parse(data)
               this.props.set_user_info(infomation)
               this.props.set_excercise(id)
               this.setState({show:true})
           })
    }
    update_(id){
        let url="http://localhost:8080/CRUD/ShowInfo"
        console.log(url)
        fetch(url)
           .then(response => response.text())
           .then(data => {
               let infomation=JSON.parse(data)
               this.props.set_user_info(infomation)
               this.props.set_excercise(id)
               this.setState({update:true})
           })
    }
    delete_(id){
        let url="http://localhost:8080/CRUD/Delete?exercise="+id
        console.log(url)
        fetch(url)
           .then(response => response.text())
           .then(data => {
               let infomation=JSON.parse(data)
               this.props.set_user_info(infomation)
           })
    }
    logout_(e){
        e.preventDefault()
        let url="http://localhost:8080/CRUD/Logout"
        console.log(url)
        fetch(url)
           .then(response => response.text())
           .then(data => {
               console.log(data)
               this.setState({logout:true})
           })
    }
    onClick(e){
        this.setState({option:e.target.value})
    }
    render(){
        if(this.state.create==true)
            return (<Redirect exact to="/CRUD/Create_Exercise" />);
        if(this.state.show==true)
            return (<Redirect exact to="/CRUD/Show_Exercise" />);
        if(this.state.update==true)
            return (<Redirect exact to="/CRUD/Update_Exercise" />);
        if(this.state.logout==true)
            return (<Redirect exact to="/CRUD/" />);
        return(
            <div className="contenido">
                <div className="title">
                    CREAR, ALTAS, BAJAS Y CAMBIOS DE EJERCICIOS
                </div>
                <div className="saludo">Bienvenido: {this.props.user[0].ID}</div>
                <div className="btn_group">
                    <form method='get'onSubmit={this.onSubmit.bind(this)}>
                        <button className='crear' type='submit'>
                            Crear nuevo ejecicio</button>
                    </form>
                    <form method='get'onSubmit={this.logout_.bind(this)}>
                        <button className='crear' type='submit' style={{background:"#F33"}}>
                            Salir</button>
                    </form>
                </div>
                <div className='table'>
            <div className='table_header'>
                <div className='table_header1'>Usuario</div>
                <div className='table_header2'>Acciones</div>
            </div>
                {this.props.user[1].map((element,index)=>{
                    return(
                        <div>
                        <div className='name'>{"Ejercicio "+(index+1)}</div>
                        <form method='get' className='table_actions'
                            onSubmit={this.onSubmit_options.bind(this)}>

                            <input name='id' type='text' value={element.idEjercicio}/>
                            <button name='send' value="1" type='submit' className='button'
                                onClick={this.onClick.bind(this)}>Ver ejercicio</button>
                            <button name='send' value="2" type='submit' className='button'
                                onClick={this.onClick.bind(this)}>Modificar ejercicio</button>
                            <button name='send' value="3" type='submit' className='button'
                                onClick={this.onClick.bind(this)}>Eliminar ejercicio</button>
                        </form>
                        </div>
                    )})}
                </div>
            </div>
        );
    }
}

export default Info;
