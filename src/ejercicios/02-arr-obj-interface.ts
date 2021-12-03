// let habilidades = [1, 'Raúl', true, [], {}]

// let habilidades = ['Bash', 'Counter', 'Healing']
// habilidades.push(1) //No se puede realizar el push de esta manera porque anteriormente TypeScript lo declara como uno o más tipo de variables. El push(1), se puede hacer si el tipo de arreglo es number o any
let habilidades: string[] = ['Bash', 'Counter', 'Healing']

interface Personajes{
    nombre: string;
    hp: number;
    habilidades: string[],
    puebloNatal ?: string; //el signo ? antes de los dos puntos, le dice a TypeScript que esa variable es opcional
}    //La interface es una serie de llaves para asegurarnos que un código sea como nosotros queramos

// const personaje ={
//     nombre: 'Strider',
//     hp: 100,
//     habilidades: ['Bash', 'Counter', 'Healing']
// }
const personaje: Personajes = {
    nombre: 'Strider',
        hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}     //se declara de esta manera como si fuese de tipo any[]
personaje.puebloNatal='Pueblo Paleta'
console.table(personaje);