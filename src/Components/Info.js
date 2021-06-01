import React from 'react';
import './Info.css';
//import Field from './Field.js';
import  { Redirect } from 'react-router-dom'

class Info extends React.Component{
    constructor(props){
        super(props)
        this.state={}
        this.setState({create:false})
    }
    onSubmit(){
        this.setState({create:true})
    }
    render(){
        if(this.state.create==true)
            return (<Redirect exact to="/CRUD/Create_User" />);
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
                        <div className='name'>{element.nombre}</div>
                        <form method='post' className='table_actions' action='Options'>
                            <input name='id' type='text' value={element.id}/><span></span>
                            <button name='send' value="1" type='submit' className='button'>Leer registro usuario</button>
                            <button name='send' value="2" type='submit' className='button'>Modificar usuarios</button>
                            <button name='send' value="3" type='submit' className='button'>Eliminar usuario</button>
                        </form>
                        </div>
                    )})}
                </div>
            </div>
        );
    }
}

export default Info;
