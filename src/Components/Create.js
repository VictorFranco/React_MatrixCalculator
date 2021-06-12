import React from 'react';
import './Login.css';
import './Create.css';
import Card from './Card';

class Crear extends React.Component{
    constructor(props){
        super(props)
        this.state={orden : "3"}
    }
    onChange(e){
        let value=e.target.value
        this.setState({orden : value})
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
        for(let i=0;i<orden;i++)
            for(let j=0;j<orden;j++)
                items.push(<div><input type='text'/></div>);
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
                            <div className="matriz" style={style_}>
                                {items}
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
