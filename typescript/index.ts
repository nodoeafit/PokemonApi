/*

// SOLID 
//  (Single Responsibility principle) ok
//  (Open/Closed principle) ok
//  (Liskov's Substitution principle) ok
//  (Interface Segregation principle) ok
//  (Dependency Inversion principle) ok

// POO (OPP) ***

// KISS (Keep it simple, stupid) 
// DRY (Don't repeat yourself) 
// YAGNI (You ain't gonna need it)

// Clean code

// CLASES
// Plantilla. => Objetos.


Clase Carro {
//propiedades
Modelo
Color
Marca
Cantidad de llantas
Puestos
Transmisión
Cantidad Puertas
Chasis

//métodos o funciones
Acelerar()
Frenar()
Direccionales()
}

var carro1 = nevo Carro();
carro1.Color = 'Rojo';
carro1.Acelerar();

/////////////////////

Abstract Class MediosTransporte {
//propiedades
Modelo
Color
Marca
Puestos
Chasis
Pasajeros

//métodos o funciones
Circular()
}

Clase Carro extends MediosTransporte {
//propiedades
Modelo
Color
Marca
Cantidad de llantas
Puestos
Transmisión
Cantidad Puertas
Chasis

//métodos o funciones
Acelerar()
Frenar()
Direccionales()
Circular()
}

var carro1 = nuevo Carro();
carro1.Pasajeros = 8;
carro1.Circular();

Clase Barco extends MediosTransporte {
//propiedades
Modelo
Color
Marca
Puestos

//métodos o funciones
Acelerar()
Acelerar(marcha)
Frenar()
Circular()
}

MediosTransporte barco1 = nuevo Barco();
carro1.Pasajeros = 200;
carro1.Circular();

MediosTransporte medioT;

menu "que vehiculo quiere tomar?"
1 carro
2 barco
3 moto
....

1

medioT = nuevo Carro();

*/

