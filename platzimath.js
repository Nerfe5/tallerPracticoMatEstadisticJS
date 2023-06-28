
// calcular al mediana con JavaScript
function esPar(lista){
 return !(lista.length % 2);
}

function esImpar(lista){
    return lista.length % 2;
}


function calcularMediana(lista){
    const listaEsPar = esPar(lista);

    if(listaEsPar){
        const indexMitad1ListaPar = (lista.length / 2) -1;
        const indexMitad2ListaPar = lista.length / 2;
        
        const listaMitades = [];
        listaMitades.push(lista[indexMitad1ListaPar]);
        listaMitades.push(lista[indexMitad2ListaPar]);
        const medianaListaPar = calcularPromedio(listaMitades);
        return medianaListaPar;
    }else{
        const indexMitadListaImpar = Math.floor(lista.length / 2);  
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);      
        return medianaListaImpar;
    }
}





//calcular promedio con JavaScript
function calcularPromedio(array){
 // sumar los elementos del array / cantidad de elementos
/*  let sumarArray = 0;
for(let i = 0; i < array.length; i++){
sumarArray = sumarArray + array[i];
} */

//Método reduce de los arrays

const sumarTodosElementos = 
    (valorAcumulado, nuevoValor) =>
    valorAcumulado + nuevoValor;


const sumarArray = array.reduce(sumarTodosElementos);

const promedio = sumarArray / array.length

console.log(promedio);
return promedio;
 
}