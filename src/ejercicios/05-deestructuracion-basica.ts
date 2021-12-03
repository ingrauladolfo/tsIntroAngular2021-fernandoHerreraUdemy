interface Reproductor{
    volumen: number;
    segundo: number;
    rola: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anuario: number;
}
const Reproductor: Reproductor = {
    volumen: 100,
    segundo: 25,
    rola:'Mess',
    detalles: {
        autor: 'Ed Sheran',
        anuario: 2015
    }
}
// const autor  = 'Fulano';
const {volumen, segundo, rola, detalles} = Reproductor;
const {autor} = detalles; //Deestructar objetos reproductor
// const {autor} = detalles; //Deestructar objetos detalles
console.log('El volumen actual es de: ',volumen)
console.log('El segundo actual es de: ',segundo)
console.log('La canción actual es de: ',rola)
console.log('El autor es: ', autor)

// De arreglos
const DBZ: string[] = ['Goku', 'Vegeta', 'Trunks'];
// const [ p1,p2,p3] = DBZ;
const [ ,,p3] = DBZ;
// console.log('Personaje 1: ', DBZ[0])
// console.log('Personaje 1: ', p1)
// console.log('Personaje 2: ', DBZ[1])
// console.log('Personaje 1: ', p2)
// console.log('Personaje 3: ', DBZ[2])
console.log('Personaje 3: ', p3)