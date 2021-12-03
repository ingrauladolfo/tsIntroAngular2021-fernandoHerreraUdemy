// console.log('Hola Mundo!!!');

// Tipos básicos y conceptos generales

let nombre: string = 'Strider' //TypeScript por defecto define el tipo de variable aunque se puede especificar el tipo
let hp: number = 95; //Para definir dos tipos de variables, se puede poner un pipe (tubería) para especificar el otro tipo
let estaVivo: boolean = true;
let hp2: number|string = 95;
nombre = 'Raúl';
hp2 = 'FULL'
console.log(nombre, hp, hp2)
// nombre = 123; //Cuando se define el tipo y quieres poner otro tipo, Typescript se quejará

