

function quickSort(arr: number[]): number[]{
    if(arr.length <= 1){
        return arr;
    }
    
    const pivote: number = arr[arr.length - 1];
    const arr_izq: number[] = [];
    const arr_der: number[] = [];
    for (let i = 0 ; i < arr.length - 1; i++){
        if(arr[i] < pivote){
            arr_izq.push(arr[i]);
        } else {
            arr_der.push(arr[i]);
        }
    }

    return quickSort(arr_izq).concat(pivote).concat(quickSort(arr_der));
}

const arrDesordenado = [1, 34, 2, 7, 44, 10, 33, 14]
const arrOrdenado = quickSort(arrDesordenado);

arrOrdenado.forEach(e => console.log(e));