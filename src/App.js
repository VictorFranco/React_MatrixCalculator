import React from 'react';
import './App.css';
import Login from './Components/Login';
import Info from './Components/Info';
import Create from './Components/Create';
import Show from './Components/Show';
import Matriz from './Components/Matriz';
import Desplegar from './Components/Desplegar'
import Formar from './Components/Formar'
import Pruebita from './Components/Pruebita'
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
    user_information(inf){
        this.setState({user:inf})
        console.log(this.state.user)
    }
    render(){
        return(
            <Router>
                <Route exact path='/CRUD/' render={
                    ()=> <Login set_users={this.set_users_information.bind(this)}/>
                   

                }/>
                <Route exact path='/CRUD/Info/' render={
                    ()=><Info
                        info={this.state.info}
                        set_users={this.set_users_information.bind(this)}
                        set_user={this.user_information.bind(this)}/>
                }/>
                <Route exact path='/CRUD/Create_user/' render={
                    ()=><Create set_users={this.set_users_information.bind(this)}/>
                }/>
                <Route exact path='/CRUD/Show_user/' render={
                    ()=> <Show info={this.state.user}/>
                   
                }/>
                <Route exact path='/Matriz/' render={
                    ()=><Matriz />
                }/>
                <Route exact path='/Desplegar/' render={
                    ()=><Desplegar />
                }/>
               
                
            </Router>
        );
    }
}

export default App;
