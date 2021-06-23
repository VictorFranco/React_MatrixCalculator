import React from 'react'
import './Info.css'
import  { Redirect } from 'react-router-dom'
import axios from "axios"

class Info extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    onSubmit(e){
        e.preventDefault()
        this.setState({create:true})
    }
    onSubmit_options(e){
        e.preventDefault()
        let id=e.target[0].value
        switch (this.state.option) {
            case "1": this.show_(id); break
            case "2": this.update_(id); break
            case "3": this.delete_(id); break
            case "4": this.try_(id); break
        }
    }
    show_(id){
        let url=new URL('ShowInfo',this.props.base_url)
        axios.get(url)
           .then(response => response.data)
           .then(data => {
               this.props.set_user_info(data)
               this.props.set_excercise(id)
               this.setState({show:true})
           })
    }
    update_(id){
        let url=new URL('ShowInfo',this.props.base_url)
        axios.get(url)
           .then(response => response.data)
           .then(data => {
               this.props.set_user_info(data)
               this.props.set_excercise(id)
               this.setState({update:true})
           })
    }
    try_(id){
        let url=new URL('ShowInfo',this.props.base_url)
        axios.get(url)
           .then(response => response.data)
           .then(data => {
               this.props.set_user_info(data)
               this.props.set_excercise(id)
               this.setState({try_:true})
           })
    }
    delete_(id){
        let resp=confirm("¿Estas seguro de borrar este ejercicio?")
        if(!resp) return false
        let url=new URL('Delete',this.props.base_url)
        url+="?exercise="+id
        axios.post(url)
           .then(response => response.data)
           .then(data => {
               this.props.set_user_info(data)
           })
    }
    logout_(e){
        e.preventDefault()
        let url=new URL('Logout',this.props.base_url)
        axios.post(url)
           .then(response => response.data)
           .then(data => {
               this.setState({logout:true})
           })
    }
    onClick(e){
        this.setState({option:e.target.value})
    }
    render(){
        if(this.state.create==true)
            return (<Redirect exact to="/Create_Exercise" />);
        if(this.state.show==true)
            return (<Redirect exact to="/Show_Exercise" />);
        if(this.state.update==true)
            return (<Redirect exact to="/Update_Exercise" />);
        if(this.state.try_==true)
            return (<Redirect exact to="/Try_Exercise" />);
        if(this.state.logout==true)
            return (<Redirect exact to="/" />);
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
                            <button name='send' value="4" type='submit' className='button'
                                onClick={this.onClick.bind(this)}>Probar ejercicio</button>
                        </form>
                        </div>
                    )})}
                </div>
            </div>
        );
    }
}

export default Info;
