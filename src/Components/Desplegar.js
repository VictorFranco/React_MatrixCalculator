import React, {Component} from 'react';

class Desplegar extends Component{

  constructor(props)
  {
     let arr = new Array(9);
      super(props)
      this.state ={arr}

  }
  crearMatriz(size){

      var matriz = new Array(size);

      for(let i = 0; i < size ; i++){
        matriz[i]=new Array(size);
        for(let j = 0; j< size ; j++){
        }
    }
     return matriz;
    }


  Cofactores(matriz,temp,q,size){
    let p = 0;
    let i =0;
    let j =0;
    for(let fila =0; fila<size;fila++){
      for(let columna =0; columna<size; columna++){
        if(fila != p && columna !=q){
          temp[i][j++] = matriz[fila][columna];
        } if(j == size-1){
              j = 0;
              i++;
        }
      }
    }
  }

  Determinante(matriz, size){
    let dete = 0;
    if(size == 1){
      return matriz[0];
    }
      let temp = this.crearMatriz(size)

      let multiplicador = 1
        for(let f =0; f<size; f++){
          this.Cofactores(matriz, temp, f, size)
           dete += parseInt(multiplicador) * parseInt(matriz[0][f])  * parseInt(this.Determinante(temp,size-1))
           multiplicador = -multiplicador


    }return dete;
  }

  transpuesta(matriz, size){
    let temp = this.crearMatriz(size)
    console.log(matriz)
    console.log(temp)
    for(let i = 0; i<size; i++){
      for(let j = 0; j<size; j++){
        temp[j][i] = matriz[i][j]
      }
    }
    return temp;
  }

  Adjunta(matriz, size){
    let adj = this.crearMatriz(size)
    let temp = this.crearMatriz(size)
    let signo = 1

    if(size == 1){
      adj[0][0] = 1;
      return
    }

  }

  Inversa(){

  }


 Itemdos(matriz) {

  return(<input type="number" key={matriz} value={matriz}/>)
    }

  Item(matriz) {

    return(matriz.map(message => this.Itemdos(message)))

    }

  onSubmit(e){
    e.preventDefault()

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
                    matriz[i][j] = parseInt(Math.random() * 10) ;
                    m++;
                   }

             }
             console.log(matriz)
            return (
              <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                  {matriz.map(message => this.Item(message))}
                  <button type="submit">Resolver</button>
                </form>
              {/* <h2>{this.Determinante(matriz, size)}</h2> */}
              <p>{this.transpuesta(matriz,size)}</p>
                </div>
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
