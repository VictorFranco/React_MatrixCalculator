import React from 'react';
import './Login.css';
import Card from './Card';

class Crear extends React.Component{
    render(){
        let campos_crear=[
            "Nombre",
            "Apellido",
            "Email",
            "Password"
        ]
        return(
            <div>
                <div className="content">
                <div className="title">ALTAS</div>
                    <Card
                        title="Crear Usuario"
                        campos={campos_crear}
                        set_users={this.props.set_users}/>
                </div>
            </div>
        );
    }
}

export default Crear;
