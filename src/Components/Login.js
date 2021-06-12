import React from 'react';
import './Login.css';
import Card from './Card';

class Login extends React.Component{
    render(){
        let campos_iniciar=[
            "ID",
            "Password"
        ]
        return(
            <div>
                <div className="content">
                <div className="title">Login</div>
                <div className="cards">
                    <Card
                        title="Iniciar Sesion"
                        campos={campos_iniciar}
                        set_users={this.props.set_users}/>
                </div>
                </div>
            </div>
        );
    }
}

export default Login;
