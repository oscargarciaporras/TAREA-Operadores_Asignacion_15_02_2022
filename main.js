


let x = prompt("numero 1 = x","dijite un numero");
let y = prompt("numero 2 = y","dijite un numero");
let myStyle = `
    color: #0066CC;
    background: #000000;
    padding: 20px;
    border-radius: 20px;
`;


let suma=new Number (x)+new Number (y); 
let resta=x-y;
let multiplicacion=x*y;
let divicion=x/y;
let residuo=x%y;
let exponente=x**y; 
 

console.log(`%c Resultados de operaciones:`, myStyle);
console.log(`Valores ingresados x=${x} & y=${y}
  
suma= ${new Number (x)+new Number (y)}   resta= ${resta}
multiplicacion= ${multiplicacion}   divicion= ${divicion}
residuo= ${residuo}   exponente= ${exponente}`);