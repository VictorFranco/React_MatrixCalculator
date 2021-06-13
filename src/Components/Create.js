import React from 'react';
import './Login.css';
import './Create.css';
import Matrix from './Matrix';

class Crear extends React.Component{
    constructor(props){
        super(props)
        this.state={orden : "3",matrix:[[0,0,0],[0,0,0],[0,0,0]],result:[0]}
    }
    onSubmit(e){
        e.preventDefault()
        let new_matrix=new Matrix()
        let result=new_matrix.transpose(this.state.matrix)
        console.log(result)
        this.setState({result:result})
    }
    onChange(e){
        let value=e.target.value
        let new_value=value||this.state.orden
        this.setState({orden : value})
        let m1=new Array(parseInt(new_value)).fill().map(
            ()=>new Array(parseInt(new_value)).fill(0)
        )
        this.setState({matrix:m1})
    }
    addElement(e,x,y){
        let m1=this.state.matrix;
        m1[y][x]=e.target.value
        console.log(m1)
        this.setState({matrix:m1})
    }
    render(){
        let orden=this.state.orden
        orden=isNaN(orden)?3:orden
        orden=orden>8?8:orden
        let items=[]
        let style_={
            width:40*orden+"px",
            gridAutoRows:"40px",
            gridTemplateColumns:"repeat("+orden+",1fr)",
            alignContent:"center",
            placeItems:"center",
            marginBottom:"10px"
        }
        let m1=[]
        for(let i=0;i<orden;i++){
            let row=[]
            for(let j=0;j<orden;j++)
                row.push(this.state.matrix[i][j])
            m1.push(row)
        }
        return(
            <div>
                <div className="content">
                <div className="title">Crear</div>
                    <div className="cards">
                        <div className="card">
                            <div className="card-title">
                                Inserta los datos
                            </div>
                            <div className="asignar">
                                <div style={{marginRight:"4px"}}>Orden:</div>
                                <input
                                    onChange={this.onChange.bind(this)}
                                    value={orden} type="text"/>
                            </div>
                            <form onSubmit={this.onSubmit.bind(this)} method="get" className="form matrix">
                                <div>
                                    <Matrix content={m1} addElement={this.addElement.bind(this)}/>
                                </div>
                                <div className="btn">
                                    <button type="submit">Transpuesta</button>
                                </div>
                            </form>
                        </div>
                        <div className="card">
                            <div className="card-title">
                                Resultado
                            </div>
                            <div className="asignar">
                                <div>Transpuesta</div>
                            </div>
                            <form method="get" className="form matrix">
                                <div style={{pointerEvents:"none"}}>
                                    <Matrix content={this.state.result} addElement={this.addElement.bind(this)}/>
                                </div>
                                <div className="btn">
                                    <button type="submit">Guardar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Crear;
