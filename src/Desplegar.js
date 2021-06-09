import React, {Component} from 'react';

class Desplegar extends Component{
   
    Matriz = () =>{
        let array = [1,2,3,4,5,6,7,8,9]; 

    }

    Determinante = () =>{
        let array = [1,2,3,4,5,6,7,8,9]; 
        let detsum = (array[1] * array[5] * array[9]) + (array[2] * array[6] * array[7]) + (array[4] * array[8] * array[3]) 
        let detrest =  (array[3] * array[5] * array[7]) + (array[6] * array[8] * array[1]) + (array[2] * array[4] * array[9]) 

        let resp = detsum + detrest;
        console.log(resp)

    }


    render(){
        return(
            <div>
              <h1>Nombre</h1>
              <p>Bienvenidos al Himalaya</p>
            </div>
        );
    }
    
}



export default Desplegar;