import React from 'react';
import './Login.css';
import './Create.css';
import Matrix from './Matrix';

class Crear extends React.Component{
    constructor(props){
        super(props)
        this.state={orden : "3",matrix:[[0,0,0],[0,0,0],[0,0,0]]}
    }
    onChange(e){
        let value=e.target.value
        let new_value=value+this.state.orden
        this.setState({orden : value})
        let m1=[]
        for(let i=0;i<new_value;i++)
            m1.push(new Array(parseInt(new_value)).fill(0));
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
            gridAutoRows: "40px",
            gridTemplateColumns:"repeat("+orden+",1fr)",
            alignContent: "center",
            placeItems: "center"
        }
        let m1=[]
        for(let i=0;i<orden;i++){
            let row=[]
            for(let j=0;j<orden;j++)
                row.push(this.state.matrix[j][i])
            m1.push(row)
        }
        return(
            <div>
                <div className="content">
                <div className="title">Crear</div>
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
                        <form method="post" className="form matrix">
                            <div>
                                <Matrix content={m1} addElement={this.addElement.bind(this)}/>
                            </div>
                            <div className="btn">
                                <button type="submit">Resolver</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Crear;
