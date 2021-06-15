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


  Cofactores(matriz,temp,q,p,size){
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
    for(let i = 0; i<size; i++){
      for(let j = 0; j<size; j++){
        this.Cofactores(matriz,temp,i,i,size)
        signo = ((i+j)%2==0)?1:-1

        adj[j][i] = (signo)*(parseInt(this.Determinante(temp,size-1)))
      }
    }
    console.log(adj)
    return adj;
  }

  CheckInvers(matriz,size){
    let inv = this.crearMatriz(size)
    let det = this.Determinante(matriz,size)
    if(det == 0){
      console.log("No se pudo")
      return false;
    }
    let adj = this.crearMatriz(size)
    this.Adjunta(matriz,size)
    for(let i=0; i<size;i++){
      for(let j=0; j<size; j++){
        console.log("Entra")
        inv[i][j] =  parseFloat(matriz[i][j])/parseFloat(det);
        console.log("Aqui ya no entrá")
        console.log(inv[i][j])
      }
    }
    return inv;
  }

  Inversa(matriz, size){
    let temp = this.crearMatriz(size)
    let inv = this.CheckInvers(matriz,size)
    if(inv != false){
      return inv
    }
    return <h2>No tiene inversa</h2>
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
