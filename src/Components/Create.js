import React from 'react';
import './Login.css';
import './Create.css';
import Card from './Card';

class Crear extends React.Component{
    render(){
        let items=[]
        let style_={
            width:40*5+"px",
            gridAutoRows: "40px",
            gridTemplateColumns:"repeat("+5+",1fr)",
            alignContent: "center",
            placeItems: "center"
        }
        for(let i=0;i<5;i++)
            for(let j=0;j<5;j++)
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
                            <div>Orden:</div>
                            <input type="text"/>
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
