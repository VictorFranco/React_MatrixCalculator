import React from 'react';
import './Login.css';
import './Create.css';
import Cell from './Cell';

class Matrix extends React.Component{
    render(){
        let size=this.props.content.length
        let inputs=[]
        let style_={
            width:40*size+"px",
            gridAutoRows: "40px",
            gridTemplateColumns:"repeat("+size+",1fr)",
            alignContent: "center",
            placeItems: "center"
        }
        for(let i=0;i<size;i++)
            for(let j=0;j<size;j++)
                inputs.push(
                    <Cell x={j} y={i}
                        value={this.props.content[i][j]}
                        addElement={this.props.addElement}/>
                )
        return(
            <div className="matriz" style={style_}>
                {inputs}
            </div>
        );
    }
}

export default Matrix;
