import React from 'react';
import './App.css';
import Login from './Components/Login';
import Info from './Components/Info';
import Create from './Components/Create';
import Show from './Components/Show';
import Update from './Components/Update';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

class App extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }
    set_user_info(inf){
        this.setState({user:inf})
    }
    set_excercise(num){
        this.setState({num_excercise:num})
    }
    set_url(url){
        this.setState({base_url:url})
    }
    render(){
        return(
            <Router basename='/FinalProject/'>
                <Route exact path='/' render={
                    ()=> <Login
                        set_url={this.set_url.bind(this)}
                        set_user_info={this.set_user_info.bind(this)} />
                }/>
                <Route exact path='/Info/' render={
                    ()=><Info
                        user={this.state.user}
                        base_url={this.state.base_url}
                        set_excercise={this.set_excercise.bind(this)}
                        set_user_info={this.set_user_info.bind(this)} />
                }/>
                <Route exact path='/Create_Exercise/' render={
                    ()=><Create
                        base_url={this.state.base_url}
                        set_user_info={this.set_user_info.bind(this)} />
                }/>
                <Route exact path='/Show_Exercise/' render={
                    ()=><Show
                        num_excercise={this.state.num_excercise}
                        user={this.state.user} />
                }/>
                <Route exact path='/Update_Exercise/' render={
                    ()=><Update
                        user={this.state.user}
                        base_url={this.state.base_url}
                        num_excercise={this.state.num_excercise}
                        set_user_info={this.set_user_info.bind(this)} />
                }/>
                <Route exact path='/Try_Exercise/' render={
                    ()=> <Login
                        set_url={this.set_url.bind(this)}
                        set_user_info={this.set_user_info.bind(this)} />
                }/>
            </Router>
        );
    }
}

export default App;
