import React from 'react';
import './App.css';
import Card from './Components/Card';

class App extends React.Component{
    render(){
        let campos_iniciar=[
            "Email",
            "Password"
        ]
        let campos_crear=[
            "Nombre",
            "Apellido",
            "Email",
            "Password"
        ]
        return(
            <div className="content">
            <div className="title">Login</div>
            <div className="cards">
                <Card
                    title="Iniciar Sesion"
                    campos={campos_iniciar}/>
                <Card
                    title="Crear Usuario"
                    campos={campos_crear}/>
            </div>
            </div>);
    }
}

export default App;
