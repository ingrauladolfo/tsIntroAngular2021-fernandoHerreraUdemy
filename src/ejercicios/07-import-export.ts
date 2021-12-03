import { calculaISV, Producto } from "./06-deestructuracion-funcion";
// interface Producto {
//     desc: string;
//     precio: number;
// }
const carritoCompras: Producto[] = [
    {
        desc: 'Teléfono 1',
        precio: 100
    },
    {
        desc: 'Teléfono 2',
        precio: 150
    }
];

const[total, isv]= calculaISV(carritoCompras);
console.log('Total: ', total)
console.log('ISV: ', isv)