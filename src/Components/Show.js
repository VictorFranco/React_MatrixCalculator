import React from 'react'
import Matrix from './Matrix'
import  { Redirect,Link } from 'react-router-dom'

class Show extends React.Component{
    constructor(props){
        super(props)
    }
    addElement(e,x,y){
    }
    get_title(props){
        let num=props.num_excercise
        let json_,response={}
        for(let exercise of props.user[1])
            if(exercise.idEjercicio==num)
                json_=JSON.parse(exercise.JSON)
        response["m1"]=json_.matrix
        response["m2"]=json_.result
        let title=""
        switch (json_.option) {
            case "1": title="Transpuesta"; break
            case "2": title="Determinante"; break
            case "3": title="Inversa"; break
            case "4": title="Adjunta"; break
        }
        response["title"]=title
        return response
    }
    render(){
        let {m1,m2,title}=this.get_title(this.props)
        return(
            <div>
                <div className="content">
                <div className="title">Consultar</div>
                    <div className="btn">
                        <Link className="button" to="/Info">Return</Link>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <div className="card-title">
                                Matriz Original
                            </div>
                            <form method="get" className="form matrix">
                                <div style={{pointerEvents:"none"}}>
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
