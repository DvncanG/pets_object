import { Aves } from "./mascotas.js";
import { Gato } from "./mascotas.js";
import { Perro } from "./mascotas.js";
import { PerroCaza } from "./mascotas.js";

const mascotas = [];
const Pedrito = new Perro(1,1,"Pedrito","Perro","3/12/1998","5€")
const Nevado = new Perro(2,3,"Nevado","Perro","17/08/1996","100.99")

const Bilal = new PerroCaza("Masculino","Soughli",2,3,"Bilal","Perro Caza","01/01/2002",200)
const PacoJones = new PerroCaza("Masculino","Pastor Alemán",5,5,"PacoJones","Perro Caza","02/02/1999",500)

const Chuki = new Aves("Europa","seca","Chuki","Ave","01/01/2000",100)
const Morty = new Aves("América","húmeda","Morty","Ave","01/01/2010",200)

const Rico = new Gato("Masculino","Bueno","Rico","Gato","21/12/2009",200)
const Mang = new Gato("Femenino","Bueno","Mang","Gato","21/12/2020",900)
mascotas.push(Pedrito,Nevado,Bilal,PacoJones,Chuki,Morty,Rico,Mang)
console.log(mascotas);


const mostarMascotas = (ArrayAnimales) =>{

    ArrayAnimales.map(element =>{
        console.log("Datos de la Mascota: "+element.nombre)
        console.log("Nacimiento: "+element.fechaNacimiento)
        console.log("Tipo: "+element.tipo)
        console.log("Precio: "+element.precio)
        console.log("////////////////////////////////////////////////")

    })

}
const cambiarPrecio = (mascota,nuevoPrecio) =>{
    console.log(mascota)
    mascotas[mascota].precio = nuevoPrecio
    console.log(mascotas[mascota].precio)
    console.log(nuevoPrecio)
}
mostarMascotas(mascotas)
mostarMascotas(mascotas.filter(mascotas => mascotas.nombre == "Chuki"))
cambiarPrecio(mascotas.findIndex(mascotas => mascotas.nombre == "Chuki"),600)
mostarMascotas(mascotas.filter(mascotas => mascotas.nombre == "Chuki"))