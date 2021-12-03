// class Heroe {
//     // Private, public y static va a depender del alcance o la visibilidad de los mismo
//     // private alterEgo: string; // será visible dentro de esta clase
//     // public edad: number; //Alguien afuera de esta clase, puede ver esta propiedad
//     // static nombreReal: number; //Accedes al valor de esta propiedad sin crear una instancia de la clase

//     // constructor(){
//     //     this.alterEgo
//     // }
//     alterEgo: string;
//     edad:number;
//     nombreReal: number;
//     // imprimirNombre(){
//     //     return this.alterEgo+' '+this.nombreReal;
//     // }
// }

// interface Personajes2{
//     alterEgo?: string;
//     edad?:number;
//     nombreReal?: number;
// }  
// class Heroe {
//     alterEgo: string;
//     edad: number;
//     nombreReal: number;
//     // constructor(){
//     console.log('Heyy!!')
// }
// constructor(alterEgo: string){
//     this.alterEgo = alterEgo
// }
// constructor(alterEgo: string, edad: number){
//     this.alterEgo = alterEgo
//     this.edad = edad

// }
// }
// class Heroe {
//     constructor(public alterEgo: string, public edad?:number, public nombreReal?:string){}
// }

// // const ironMan = new Heroe();
// const ironMan = new Heroe('Iron Man', 45, 'Tony');
// // const spiderMan:Personajes2 = {};
// console.log(ironMan)

class PersonaNormal {
    constructor(public nombre: string,
        public direccion: string) { }

}
class Heroe extends PersonaNormal {
    constructor(public alterEgo: string, public edad?:number, public nombreReal?:string){
        super(nombreReal, 'New York USA');
    }
}
// const ironMan = new Heroe();
const ironMan = new Heroe('Iron Man', 45, 'Tony');
// const spiderMan:Personajes2 = {};
console.log(ironMan)