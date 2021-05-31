import React from 'react';
import './App.css';
import Card from './Components/Card';
import Login from './Components/Login';
import {BrowserRouter as Router,Route} from "react-router-dom";

class App extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path="/CRUD/" render={
                    ()=><Login/>
                }>
                </Route>
            </Router>
            );
    }
}

export default App;
