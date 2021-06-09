import React, {Component} from 'react';
import Desplegar from './Matriz';

class Matriz extends Component {

  
   
   
 

 onSubmit (e){
  let array = [1,2,3,4,5,6,9,8,9]; 
  let detsum = (array[1] * array[5] * array[9]) + (array[2] * array[6] * array[7]) + (array[4] * array[8] * array[3]) 
  let detrest =  (array[3] * array[5] * array[7]) + (array[6] * array[8] * array[1]) + (array[2] * array[4] * array[9]) 
        for(let i =0; i<9; i++){
          console.log(array[i] + array[i])
        }
  let resp = detsum + detrest;
  console.log(resp)
  
  console.log("Hola Himalaya")

   e.preventDefault()
 }

 Determinante(){
  
}




  render() {
    return (
      
      <div>
        
      <form onSubmit={this.onSubmit}>
        <label>
          Name:
          <input type="text" onChange={this.onChange} />
        </label>
        <input type="submit" value="Submit"  placeholder="alto"/>
      </form>
      <button>Inversa</button>
      <button>Determinantes</button>
      <button>Suma</button>
      {this.Determinante}
      </div>
    );
  }
}



  export default Matriz;