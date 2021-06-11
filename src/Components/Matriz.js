import React, {Component} from 'react';
import Desplegar from './Desplegar';
import Formar from './Formar';

class Matriz extends Component {


  constructor(props)
  { 
      super(props)
      this.state ={
        tamano: 0
      }
      
      
  }

  onSubmit(e){
    
    console.log(this.state.tamano)
     e.preventDefault()
     
   }

  


   
   addInfo(e){
     console.log(this.state.tamano)
     console.log(e.target.value)
    this.setState({
        [e.target.name] : e.target.value
    })
    return(this.state.tamano)
}

change(){
  return(<Desplegar tamano={this.state.tamano}/>)
}
 

 

  render() {
    return (
      
      <div>
        
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>
          Name:
          <input type="text" onChange={this.addInfo.bind(this)}  name="tamano"/>
        </label>
        <input type="submit" value="Asignar tamano"/>
      </form>
      <button >Inversa</button>
      <button >Determinante</button>
      <button>Suma</button>
       {this.change()}
      </div>
    );
  }
}



  export default Matriz;