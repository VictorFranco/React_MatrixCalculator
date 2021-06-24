import React from 'react'
import './Try.css'
import Matrix from './Matrix'
import Show from './Show'
import  { Redirect,Link } from 'react-router-dom'

class Try extends Show{
    constructor(props){
        super(props)
        let {m1,m2,title}=super.get_title(this.props)
        let new_matrix=new Matrix()
        let m_user=new_matrix.crearMatriz(m2.length||0)
        this.state={
            title:title,
            matrix:m1,
            result:m2,
            m_user:m_user,
            color:"#014b88",
            range_time:120
        }
        this.timer=0;
    }
    componentDidMount(){
        this.start_countdown.bind(this)()
    }
    addElement(e,x,y){
        let m1=this.state.m_user
        m1[y][x]=e.target.value
        this.setState({m_user:m1})
    }
    onSubmit(e){
        e.preventDefault()
        for(let i=0;i<this.state.result.length;i++)
            for(let j=0;i<this.state.result.length;i++)
                if(this.state.matrix[i][j]!=this.state.m_user[i][j]){
                    this.setState({color:"#880101"})
                    alert("No es correcto ese resultado")
                    return -1
                }
        clearInterval(this.timer)
        this.setState({color:"#076116"})
        alert("Bien hecho!")
    }
    start_countdown(){
        this.timer=setInterval(this.countdown.bind(this),1000)
    }
    countdown(){
        this.setState({range_time:this.state.range_time-1})
        if(this.state.range_time<=0){
            clearInterval(this.timer)
            alert("Se acabo el tiempo")
            this.setState({timeover:true})
        }
    }
    time_format(sec){
        var date = new Date(0);
        date.setSeconds(sec);
        return date.toISOString().substr(14,5);
    }
    render(){
        let color=this.state.color
        let time=this.time_format(this.state.range_time)
        if(this.state.timeover==true)
            return (<Redirect exact to="/Info" />);
        return(
            <div>
                <div className="content">
                <div className="title">Encuentra el resultado</div>
                    <div className="btn">
                        <Link className="button" to="/Info">Return</Link>
                    </div>
                    <div className="try">
                        <div className="card">
                            <div className="card-title">
                                Matriz Original
                            </div>
                            <form method="get" className="form matrix">
                                <div style={{pointerEvents:"none"}}>
                                    <Matrix content={this.state.matrix} />
                                </div>
                            </form>
                        </div>
                        <div className="space_clock">
                            <div className="clock">{time}</div>
                        </div>
                        <div className="card">
                            <div style={{background:color}} className="card-title">
                                Problema
                            </div>
                            <div className="asignar">
                                <div>{this.state.title}</div>
                            </div>
                            <form onSubmit={this.onSubmit.bind(this)} onmethod="get" className="form matrix">
                                <div>
                                    <Matrix content={this.state.m_user} addElement={this.addElement.bind(this)}/>
                                </div>
                                <div className="btn">
                                    <button type="submit">Calificar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Try;
