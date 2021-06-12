import React from 'react';
import './Login.css';
import './Create.css';
import Matrix from './Matrix';

class Crear extends React.Component{
    constructor(props){
        super(props)
        this.state={orden : "3",matrix:[]}
    }
    onChange(e){
        let value=e.target.value
        this.setState({orden : value})
    }
    addElement(e){
        console.log(e.target.name);
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
                row.push(0)
            m1.push(row)
        }
        console.log(m1)
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
