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
        let url="http://localhost:8080/CRUD/ShowUser?userSelected="+id
        console.log(url)
        fetch(url)
           .then(response => response.text())
           .then(data => {
               let infomation=JSON.parse(data)
               this.props.set_user(infomation)
               this.setState({show:true})
           })
    }
    update_(id){
        let url="http://localhost:8080/CRUD/ShowUser?userSelected="+id
        console.log(url)
        fetch(url)
           .then(response => response.text())
           .then(data => {
               let infomation=JSON.parse(data)
               this.props.set_user(infomation)
               this.setState({update:true})
           })
    }
    delete_(id){
        let url="http://localhost:8080/CRUD/Delete?userSelected="+id
        console.log(url)
        fetch(url)
           .then(response => response.text())
           .then(data => {
               let infomation=JSON.parse(data)
               this.props.set_users(infomation)
           })
    }
    onClick(e){
        this.setState({option:e.target.value})
    }
    render(){
        if(this.state.create==true)
            return (<Redirect exact to="/CRUD/Create_User" />);
        if(this.state.show==true)
            return (<Redirect exact to="/CRUD/Show_User" />);
        if(this.state.update==true)
            return (<Redirect exact to="/CRUD/Update_User" />);
        return(
            <div className="contenido">
                <div className="title">
                    CREAR, ALTAS, BAJAS Y CAMBIOS
                </div>
                <form method='get'onSubmit={this.onSubmit.bind(this)}>
                    <button className='crear' type='submit'>Crear usuarios</button>
                </form>
                <div className='table'>
            <div className='table_header'>
                <div className='table_header1'>Usuario</div>
                <div className='table_header2'>Acciones</div>
            </div>
                {this.props.info.map(element=>{
                    return(
                        <div>
                        <div className='name'>{element.ID}</div>
                        <form method='get' className='table_actions'
                            onSubmit={this.onSubmit_options.bind(this)}>

                            <input name='id' type='text' value={element.id}/>
                            <button name='send' value="1" type='submit' className='button'
                                onClick={this.onClick.bind(this)}>Leer registro usuario</button>
                            <button name='send' value="2" type='submit' className='button'
                                onClick={this.onClick.bind(this)}>Modificar usuarios</button>
                            <button name='send' value="3" type='submit' className='button'
                                onClick={this.onClick.bind(this)}>Eliminar usuario</button>
                        </form>
                        </div>
                    )})}
                </div>
            </div>
        );
    }
}

export default Info;
