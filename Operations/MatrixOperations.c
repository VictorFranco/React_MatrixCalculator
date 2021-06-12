#include <stdio.h>
#include <stdlib.h>

#define N 4
#define false 0;
#define true 1;
//Matriz traspuesta
void transpose(int A[][N], int B[][N]){
    int i, j;
    for (i = 0; i < N; i++)
        for (j = 0; j < N; j++)
            B[i][j] = A[j][i];
}

// Cofactor de mat[p][q] en temp[][].
void getCofactor(int mat[N][N], int temp[N][N], int p, int q, int n){
    int i = 0, j = 0, row, col;
    for (row = 0; row < n; row++){
        for (col = 0; col < n; col++){
            if (row != p && col != q){
                temp[i][j++] = mat[row][col];
                if (j == n - 1){
                    j = 0;
                    i++;
                }
            }
        }
    }
}
// n es el tamaño de mat[][].
int determinantOfMatrix(int mat[N][N], int n){
    int D = 0, f; 
    if (n == 1)
        return mat[0][0];
    int temp[N][N]; // Para los cofactores
    int sign = 1; // Para almacenar el signo
    // Iterar en cada elemento de la primera fila
    for (f = 0; f < n; f++){
        // Cofactor de mat[0][f]
        getCofactor(mat, temp, 0, f, n);
        D += sign * mat[0][f] * determinantOfMatrix(temp, n - 1);
        sign = -sign;
    }
    return D;
}
void adjoint(int A[N][N],int adj[N][N]){
    // temp para almacenar los cofactores de A[][]
    int signo = 1, temp[N][N], i, j;
    if (N == 1)
    {
        adj[0][0] = 1;
        return;
    }
    for (i=0; i<N; i++){
        for ( j=0; j<N; j++){
            // Cofactor de A[i][j]
            getCofactor(A, temp, i, j, N);
            // signo de adj[j][i] positivo si la suma de la filas y columnas es par
            signo = ((i+j)%2==0)? 1: -1;
            // Intercambiando filas y columnas para obtener la traspuesta de la matriz de cofactores
            adj[j][i] = (signo)*(determinantOfMatrix(temp, N-1));
        }
    }
}
int inverse(int A[N][N], float inverse[N][N])
{
    
    int det = determinantOfMatrix(A, N); //Poner la funcion determinante ya hecha
    if (det == 0)
    {
        printf("Singular matrix, can't find its inverse");
        return false;
    }
    // Se obtiene Adjunta
    int adj[N][N];
    adjoint(A, adj);
    // Inversa con la formula "inverse(A) = adj(A)/det(A)"
    for (int i=0; i<N; i++)
        for (int j=0; j<N; j++)
            inverse[i][j] = adj[i][j]/(float)det;
    return true;
}
int main()
{
    int A[N][N] = { {5, -2, 2, 7},
                    {1, 0, 0, 3},
                    {-3, 1, 5, 0},
                    {3, -1, -9, 4}};
  
    int adj[N][N], i, j;
    float inv[N][N];
    printf("La matriz es :\n");
    for (i = 0; i < N; i++){
        for (j = 0; j < N; j++)
           printf("%d ", A[i][j]);
        printf("\n");
    }

    printf("\nla adjunta es :\n");
    adjoint(A, adj);
    for (i = 0; i < N; i++){
        for (j = 0; j < N; j++)
           printf("%d ", adj[i][j]);
        printf("\n");
    }
  
    printf("\nLa inversa es es :\n");
    if (inverse(A, inv)){
        for (i = 0; i < N; i++){
            for (j = 0; j < N; j++)
            printf("%f ", inv[i][j]);
            printf("\n");
        }
    }
 
    return 0;
}