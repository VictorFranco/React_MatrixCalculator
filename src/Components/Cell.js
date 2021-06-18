import React from 'react'

class Cell extends React.Component{
    onChange(e){
        this.props.addElement(e,this.props.x,this.props.y)
    }
    render(){
        return(
            <input type='text'
                onChange={this.onChange.bind(this)}
                value={this.props.value}/>
        );
    }
}

export default Cell;
