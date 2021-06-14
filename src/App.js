import React from 'react';
import './App.css';
import Login from './Components/Login';
import Info from './Components/Info';
import Create from './Components/Create';
import Show from './Components/Show';
import Update from './Components/Update';
import Matriz from './Components/Matriz';
import Desplegar from './Components/Desplegar';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

class App extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }
    set_user_info(inf){
        this.setState({user:inf})
        console.log(this.state.user)
    }
    set_excercise(num){
        this.setState({num_excercise:num})
    }
    render(){
        return(
            <Router>
                <Route exact path='/CRUD/' render={
                    ()=> <Login
                        set_user_info={this.set_user_info.bind(this)} />
                }/>
                <Route exact path='/CRUD/Info/' render={
                    ()=><Info
                        user={this.state.user}
                        set_excercise={this.set_excercise.bind(this)}
                        set_user_info={this.set_user_info.bind(this)} />
                }/>
                <Route exact path='/CRUD/Create_Exercise/' render={
                    ()=><Create
                        set_user_info={this.set_user_info.bind(this)} />
                }/>
                <Route exact path='/CRUD/Show_Exercise/' render={
                    ()=><Show
                        num_excercise={this.state.num_excercise}
                        user={this.state.user} />
                }/>
                <Route exact path='/Matriz/' render={
                    ()=><Matriz />
                }/>
                <Route exact path='/Desplegar/' render={
                    ()=><Desplegar />
                }/>
                <Route exact path='/CRUD/Update_Exercise/' render={
                    ()=><Update
                        user={this.state.user}
                        num_excercise={this.state.num_excercise}
                        set_user_info={this.set_user_info.bind(this)} />
                }/>
            </Router>
        );
    }
}

export default App;
