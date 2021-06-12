import React from 'react';
import './Login.css';
import './Create.css';
import Card from './Card';

class Matrix extends React.Component{
    onChange(e){
        this.props.addElement(e)
    }
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
                    <input type='text'
                        onChange={this.onChange.bind(this)}
                        value={this.props.content[i][j]}
                        name={j+","+i}/>
                )
        return(
            <div className="matriz" style={style_}>
                {inputs}
            </div>
        );
    }
}

export default Matrix;
