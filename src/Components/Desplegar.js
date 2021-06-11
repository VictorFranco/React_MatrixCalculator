import React, {Component} from 'react';

// function Matriz(size){
//     var matriz = new Array(size);
//         for(i = 0; i < size ; i++){
//                matriz[i]=new Array(size);

//          }
//     return matriz;
// }



function Itemdos(props) {
    
    
    return (<li><input value={props.message}/></li>);
  }

function Item(props) {
    
       return (props.message.map((message) => <Itemdos key={message} message={message}/>))
  }

class Desplegar extends Component{

//     constructor(props)
//   { 
//       super (props)
//       this.state = {tamano: 4}
      

//   }


   

    
    
      
    

    render(){
       
        let rev = this.props.tamano
         if(rev == false || rev == 0){
            let size = parseInt(rev)
       
            console.log(rev )
                                
          
            // let size = 3
            var matriz = new Array(size);
            for(let i = 0; i < size ; i++){
                   matriz[i]=new Array(size);
                   for(let j = 0; j< size ; j++){
                    matriz[i][j] = "A"+j+"B"+i;
                   }
    
             }
            return (
                <ul>
                  {matriz.map((message) => <Item key={message} message={message} />)}
                </ul>
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