import React from 'react';
import './App.css';
import Card from './Components/Card';

class App extends React.Component{
    render(){
        return <div className="content">
            <div className="title">Login</div>
            <div className="cards">
                <Card title="Crear Usuario"/>
                <Card title="Iniciar Sesion"/>
            </div>
            </div>
    }
}

export default App;
