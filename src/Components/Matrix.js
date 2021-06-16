import React from 'react'
import Cell from './Cell'

class Matrix extends React.Component{
    crearMatriz(size){
        let matriz=Array(parseInt(size)).fill().map(
            ()=>Array(parseInt(size)).fill(0)
        )
        return matriz
    }

    Cofactores(matriz,temp,q,p,size){
        let i =0
        let j =0
        for(let fila =0; fila<size;fila++)
            for(let columna =0; columna<size; columna++){
                if(fila != p && columna !=q)
                    temp[i][j++] = matriz[fila][columna]
                if(j == size-1){
                    j = 0
                    i++
                }
            }
    }

    Determinante(matriz, size){
        let dete = 0
        if(size == 1) return matriz[0]
        let temp = this.crearMatriz(size)
        let multiplicador = 1
        for(let f =0; f<size; f++){
            this.Cofactores(matriz, temp, f,0, size)
            dete += parseInt(multiplicador) * parseInt(matriz[0][f])  * parseInt(this.Determinante(temp,size-1))
            multiplicador = -multiplicador
        }
        return dete
    }

    Transpuesta(matriz, size){
        let temp = this.crearMatriz(size)
        for(let i = 0; i<size; i++)
            for(let j = 0; j<size; j++)
                temp[j][i] = matriz[i][j]
        return temp
    }

    Adjunta(matriz, size){
        let adj = this.crearMatriz(size)
        let temp = this.crearMatriz(size)
        let signo = 1
        if(size == 1){
            adj[0][0] = 1
            return
        }
        for(let i = 0; i<size; i++)
            for(let j = 0; j<size; j++){
                this.Cofactores(matriz,temp,i,i,size)
                signo = ((i+j)%2==0)?1:-1
                adj[j][i] = (signo)*(parseInt(this.Determinante(temp,size-1)))
          }
        return adj
    }

    CheckInvers(matriz,size){
        let inv = this.crearMatriz(size)
        let det = this.Determinante(matriz,size)
        if(det == 0) return false
        let adj = this.crearMatriz(size)
        this.Adjunta(matriz,size)
        for(let i=0; i<size;i++)
            for(let j=0; j<size; j++){
                inv[i][j] =  parseFloat(matriz[i][j])/parseFloat(det)
            }
        return inv
    }

    Inversa(matriz, size){
        let temp = this.crearMatriz(size)
        let inv = this.CheckInvers(matriz,size)
        return inv
    }

    render(){
        let size=this.props.content.length
        let inputs=[]
        let style_={
            width:50*size+"px",
            gridAutoRows:"50px",
            gridTemplateColumns:"repeat("+size+",1fr)",
            alignContent:"center",
            placeItems:"center",
            marginBottom:"20px"
        }
        for(let i=0;i<size;i++)
            for(let j=0;j<size;j++)
                inputs.push(
                    <Cell x={j} y={i}
                        value={this.props.content[i][j]}
                        addElement={this.props.addElement}/>
                )
        return(
            <div className="matriz" style={style_}>
                {inputs}
            </div>
        );
    }
}

export default Matrix;
