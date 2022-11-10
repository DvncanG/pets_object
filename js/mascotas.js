/*CLASE MASCOTAS */

export class Mascotas {

    constructor(nombre, tipo, fechaNacimiento, precio) {
        this._nombre = nombre
        this._tipo = tipo
        this._fechaNacimiento = fechaNacimiento
        this._precio = precio
    }

    get nombre(){ return this._nombre}
    get tipo(){ return this._tipo}
    get fechaNacimiento(){return this._fechaNacimiento}
    get precio(){return this._precio}

    set nombre(nombre){this._nombre}
    set tipo(tipo){this._tipo}
    set fechaNacimiento(fechaNacimiento){this._fechaNacimiento}
    set precio(precio){this._precio}

}
export class Perro extends Mascotas{
    constructor(chip,pureza,nombre, tipo, fechaNacimiento, precio){
        super(nombre, tipo, fechaNacimiento, precio)

    }
    get chip(){return this._chip}
    get pureza(){return this._pureza}

    set chip(chip){this._chip}
    set pureza(pureza){this._pureza}
}
export class PerroCaza extends Perro{
    constructor(sexo,raza,chip,pureza,nombre, tipo, fechaNacimiento, precio){
        super(chip,pureza,nombre, tipo, fechaNacimiento, precio)

    }
    get sexo(){return this._sexo}
    get raza(){return this._raza}

    set sexo(sexo){this._sexo}
    set raza(raza){this._raza}
}

export class Gato extends Mascotas{
    constructor(sexo,estado,nombre, tipo, fechaNacimiento, precio){
        super(nombre, tipo, fechaNacimiento, precio)

    }
    get sexo(){return this._sexo}
    get estado(){return this._estado}

    set sexo(sexo){this._sexo}
    set estado(estado){this._estado}
}

export class Aves extends Mascotas{
    constructor(continente,alimentacion,nombre, tipo, fechaNacimiento, precio){
        super(nombre, tipo, fechaNacimiento, precio)

    }
    get continente(){return this._continente}
    get alimentacion(){return this._alimentacion}

    set continente(continente){this._continente}
    set alimentacion(alimentacion){this._alimentacion}
}