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
                        set_url={this.props.set_url}
                        set_user_info={this.props.set_user_info}/>
                </div>
                </div>
            </div>
        );
    }
}

export default Login;
