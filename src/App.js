import React from 'react';
import './App.css';
import Login from './Components/Login';
import Info from './Components/Info';
import Crear from './Components/Crear';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

class App extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }
    set_users_information(inf){
        this.setState({info:inf})
        console.log(this.state.info)
    }
    render(){
        return(
            <Router>
                <Route exact path='/CRUD/' render={
                    ()=><Login set_users={this.set_users_information.bind(this)}/>
                }/>
                <Route exact path='/CRUD/Info/' render={
                    ()=><Info info={this.state.info}/>
                }/>
                <Route exact path='/CRUD/Crear/' render={
                    ()=><Crear set_users={this.set_users_information.bind(this)}/>
                }/>
            </Router>
        );
    }
}

export default App;
