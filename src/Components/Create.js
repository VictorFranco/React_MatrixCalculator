import React from 'react';
import './Login.css';
import './Create.css';
import Matrix from './Matrix';
import  { Redirect,Link } from 'react-router-dom'

class Create extends React.Component{
    constructor(props){
        super(props)
        this.state={
            orden:"3",
            option:"0",
            matrix:[[0,0,0],[0,0,0],[0,0,0]],
            result:"",
            update:false
        }
    }
    save(e){
        e.preventDefault()
        let info={
            option:this.state.option,
            matrix:this.state.matrix,
            result:this.state.result
        }
        let url='http://localhost:8080/CRUD/Create?'
            url+=`JSON=${JSON.stringify(info)}`
        console.log(url)
        fetch(url)
           .then(response => response.text())
           .then(data => {
               let infomation=JSON.parse(data)
               this.props.set_user_info(infomation)
               this.setState({update:true})
           })
    }
    onSubmit(e){
        e.preventDefault()
        if(this.state.option=="1") this.transpose()
        if(this.state.option=="2") this.determinante()
        if(this.state.option=="3") this.inversa()
        if(this.state.option=="4") this.adjunta()
    }
    transpose(){
        let new_matrix=new Matrix()
        let result=new_matrix.transpose(this.state.matrix)
        console.log(result)
        this.setState({result:result})
    }
    determinante(){
        let new_matrix=new Matrix()
        let result=new_matrix.Determiner(this.state.matrix,this.state.matrix.length)
        console.log(result,this.state.matrix,this.state.matrix.length)
        this.setState({result:[[result]]})
    }
    inversa(){
        let new_matrix=new Matrix()
        let result=new_matrix.Inversa(this.state.matrix,this.state.matrix.length)
        console.log(result)
        this.setState({result:result})
    }
    adjunta(){
        let new_matrix=new Matrix()
        let result=new_matrix.Adjunta(this.state.matrix,this.state.matrix.length)
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
    onClick(e){
        this.setState({option:e.target.value})
    }
    render(){
        let orden=this.state.orden
        orden=isNaN(orden)?3:orden
        orden=orden>8?8:orden
        let title=""
        switch (this.state.option) {
            case "1": title="Transpuesta"; break;
            case "2": title="Determinante"; break;
            case "3": title="Inversa"; break;
            case "4": title="Adjunta"; break;
        }
        if(this.state.update==true)
            return (<Redirect exact to="/CRUD/Info" />);
        return(
            <div>
                <div className="content">
                <div className="title">Crear</div>
                    <div className="btn">
                        <Link className="button" to="/CRUD/Info">Return</Link>
                    </div>
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
                                    <Matrix content={this.state.matrix} addElement={this.addElement.bind(this)}/>
                                </div>
                                <div style={{flexWrap:"wrap"}} className="btn">
                                    <button value="1" type="submit" onClick={this.onClick.bind(this)}>
                                        Transpuesta</button>
                                    <button value="2" type="submit" onClick={this.onClick.bind(this)}>
                                        Determinante</button>
                                    <button value="3" type="submit" onClick={this.onClick.bind(this)}>
                                        Inversa</button>
                                    <button value="4" type="submit" onClick={this.onClick.bind(this)}>
                                        Adjunta</button>
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
                            <form onSubmit={this.save.bind(this)} method="get" className="form matrix">
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

export default Create;
