import React from 'react';
import './Login.css';
import './Create.css';
import Cell from './Cell';

class Matrix extends React.Component{
    //Matriz traspuesta
    transpose(A){
        let size=A.length
        let i, j;
        let B=this.crearMatriz(size)
        console.log(B)
        for (i = 0; i < size; i++)
            for (j = 0; j < size; j++)
                B[i][j] = A[j][i];
        return B
    }
    crearMatriz(size){
        let matriz=Array(parseInt(size)).fill().map(
            ()=>Array(parseInt(size)).fill(0)
        )
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
                }
                if(j == size-1){
                    j = 0;
                    i++;
                }
            }
        }
    }

    Determiner(matrix, size){
        let dete = 0;
        if(size == 1){
            return matrix[0];
        }
        let temp = this.crearMatriz(size)
        let multiplicador = 1
        for(let f =0; f<size; f++){
            this.Cofactores(matrix, temp, f, size)
            dete += parseInt(multiplicador) * parseInt(matrix[0][f]) * parseInt(this.Determiner(temp,size-1))
            multiplicador = -multiplicador
        }
        return dete;
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
    render(){
        let size=this.props.content.length
        let inputs=[]
        let style_={
            width:40*size+"px",
            gridAutoRows:"40px",
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
