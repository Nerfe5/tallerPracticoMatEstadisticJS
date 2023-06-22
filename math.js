
console.group('Cuadrado')
const ladoCuadrado = 5;
const perimetroCuadro = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado *  ladoCuadrado;


function calcularCuadrado (lado1, lado2){
    return{
        perimetro:lado1 * 4,
        area: lado1*lado2
    }
}

console.log({
    ladoCuadrado,
    perimetroCuadro,
    areaCuadrado
});

console.groupEnd('Cuadrado');

console.group('Triangulo')
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + 
        ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;


function calcularTriangulo(lado1, lado2, base, altura){
 return{
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
 }   
}


function calcularAlturaTriangulo(ladoA, base){
    if(ladoA == base){
        console.warn('Este no es un triangulo isosceles');
    }
    else{
        //h = raizcuadrada(ladoA**2) - (b**2)/4)
        return Math.sqrt((ladoA **2) - (base**2) /4 );
    }
}

function calcularAlturaEscaleno(lado1, lado2, base){
  
    function calcularAreaTrianguloEscaleno(lado1, lado2, base){

        let semiperimetro = (lado1 + lado2 + base) / 2;
        let area = Math.sqrt(
            semiperimetro * 
            (semiperimetro - lado1) *
            (semiperimetro - lado2) *
            (semiperimetro - base)
        );
        return area;
    }
    if(lado1 == lado2 || lado1 == base || lado2 == base){
        console.warn('false');
    }
    else{
    const area = calcularAreaTrianguloEscaleno(lado1, lado2, base);
    const altura = Math.floor((2 * area) / base);
    return altura;
    };

};

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo 
})


console.groupEnd('Triangulo');

console.group('Circulo')

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1416;

const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;
console.log({
radioCirculo,
diametroCirculo,
circunferencia,
areaCirculo,
})

function calcularCirculo(radio){
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);
    return{
        circunferencia:diametro * Math.PI,
        area: radioAlCuadrado * Math.PI, 
    }
}
console.groupEnd('Circulo');
