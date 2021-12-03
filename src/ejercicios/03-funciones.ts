
// function sumar(a,b){ //Se puede tipar los parámetros de las function
//     return a + b;
// }

// const resultado = sumar('Raúl', 'Torres')
// console.log(resultado);
// function sumar(a:number,b:number){ 
//     return (a + b).toString();
// }

// const resultado = sumar(10,20)
// console.log(resultado);
function sumar(a:number,b:number):number{ 
    return a+b;
}
// const sumarFlecha = (a,b)=>{
//     return a+b;
// }
const sumarFlecha = (a:number,b:number):number =>{
    return a+b;
}
function multiplicar (numero: number,otherNumber?: number, base: number = 2){
    return numero*base;
}
const resultado = sumar(10,20);
const result = multiplicar(5,10);
const resulta = multiplicar(5,0,10);
console.log(resultado);
console.log(result);
console.log(resulta);

interface PersonajeLOR{
    nombre:string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR,curarX:number):void{
    personaje.pv     += curarX; 
    // console.log(personaje)
}
const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log(this.pv)
    }
}

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();