import React, {Component} from 'react';






// function Itemdos(props) {

//   let Des = new Desplegar()
  
    
//     return (<input type="number"  name={props.message} />);
   
//   }

// function Item(props) {
    
//        return (props.message.map((message) => <Itemdos key={message} message={message}/>))
//   }

class Desplegar extends Component{
   
  constructor(props)
  { 
     let arr = new Array(9);
      super(props)
      this.state ={arr}
     
  }

 Itemdos(matriz) {
  
  return(<input type="number" key={matriz} value={matriz}/>)   
    }
  
  Item(matriz) {
      
    return(matriz.map(message => this.Itemdos(message)))
         
    }

  onSubmit(e){
    e.preventDefault()
    const arr = new Array(3)
    let count = 0;
    for(let i=0; i<3 ;i++){
      arr = new Array(3)
      for(let j = 0; i<3; i++){
        console.log(e.taget)
        count += 1
      }
    }
    
  }


 
  

    render(){
       
       let rev = this.props.tamano
         if(rev){
            let size = parseInt(rev)
       
                                
          
            let m = 0;
            var matriz = new Array(size);
            for(let i = 0; i < size ; i++){
                   matriz[i]=new Array(size);
                   for(let j = 0; j< size ; j++){
                    matriz[i][j] = m;
                    m++;
                   }
                   
             }
            return (
                <form onSubmit={this.onSubmit.bind(this)}>
                  {matriz.map(message => this.Item(message))}
                  <button type="submit">Resolver</button>
                </form>
              );
         } else {
             return (
                 <>
                    <h1>Matriz vacia</h1>
                 </>
             )
         }
        

       
    }
    
}



export default Desplegar;