(function arreglos(){
    let numeros = [0,1,2,3,4,5,6,7,8,9,10];
    let nombres =['Diego','Andrea','Pamela','Jose','Iris','Carla','Juanes'];
    let frutas = ['fresa','uva','naranja','mango','pitajaya','sandia']
    let prueba = [['zero',2,4,6],0,[3,5,7],[10,20,30]];

    console.log(numeros[10]);
    console.log(nombres[5]);
    console.log(frutas[2]);
    
    console.log('prueba',prueba[3][2]);
///////////////////////////////////////////////////////////////////
    numeros.length;
    numeros.push(11); //agregar numero al final de un array
    numeros.unshift(11); //agregar numero al inicio de un array
    numeros.pop(); // eliminar un elemento al final de un array
    numeros.shift(); //eliminar un elemento del inicio de un array
    numeros.splice(2,2); //eliminar elemento especifico

})();

(function objetos(){

    let alumno = {
        nombre: 'Diego',
        apellido: 'Valdera',
        edad:27,
        grado:5,
        sex:'m',
        getname: function(){
            return this.nombre;
        },
        getfullname: function(){
            return this.apellido
        }
    };
        console.log(`El nombre del alumno es ${alumno.nombre}`);

    let profesor = {
        nombre: 'Sebastian',
        apellido: 'Yabiku',
        edad:35,
        grado:5,
        sex:'m',
        experiencia: [
            {
                college:'santisima trinidad',
                age: 2022,
            },
            {
                college:'catolica',
                age:2021,
            }
        ]
    }

})();