import React from 'react';
import './Login.css';
import './Create.css';
import Matrix from './Matrix';
import  { Redirect,Link } from 'react-router-dom'

class Show extends React.Component{
    constructor(props){
        super(props)
    }
    addElement(e,x,y){
        let m1=this.state.matrix;
        m1[y][x]=e.target.value
        console.log(m1)
        this.setState({matrix:m1})
    }
    render(){
        let num=this.props.num_excercise
        let json_
        for(let exercise of this.props.user[1])
            if(exercise.idEjercicio==num)
                json_=JSON.parse(exercise.JSON)
        let m1=json_.matrix
        let m2=json_.result
        let title
        switch (json_.option) {
            case "1": title="Transpuesta"; break;
            case "2": title="Determinante"; break;
            case "3": title="Inversa"; break;
            case "4": title="Adjunta"; break;
        }
        return(
            <div>
                <div className="content">
                <div className="title">Consultar</div>
                    <div className="btn">
                        <Link className="button" to="/CRUD/Info">Return</Link>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <div className="card-title">
                                Matriz Original
                            </div>
                            <form method="get" className="form matrix">
                                <div>
                                    <Matrix content={m1} addElement={this.addElement.bind(this)}/>
                                </div>
                            </form>
                        </div>
                        <div className="card">
                            <div className="card-title">
                                Resultado
                            </div>
                            <div className="asignar">
                                <div>{title}</div>
                            </div>
                            <form method="get" className="form matrix">
                                <div style={{pointerEvents:"none"}}>
                                    <Matrix content={m2} addElement={this.addElement.bind(this)}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Show;
