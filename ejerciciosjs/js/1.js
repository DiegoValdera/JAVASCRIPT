(function ejercicio1(){
    //Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla.
    function sumar(a , b){
        return a + b;
    }

    function resultado1(){
        let a = Number(prompt("Ingresar primer numero"));
        let b = Number(prompt("Ingresar segundo numero"));

        console.log(`La suma de ${a} y ${b} es `, sumar(a,b));

    }
    //resultado1();
})();

(function ejercicio2(){
    //Registrar el ingreso de notas de 4 examenes y calcular el promedio de estos.
    function promedio(a,b,c,d){
        return (a+b+c+d)/4;
    }
    function resultado2(){
        const NOTA = 20;
        let a = Number(prompt("Ingresar primera nota"));
        let b = Number(prompt("Ingresar segunda nota"));
        let c = Number(prompt("Ingresar tercera nota"));
        let d = Number(prompt("Ingresar cuarta nota"));

        if(a>=0 && a<=NOTA && b>=0 && b<=NOTA && c>=0 && c<=NOTA && d>=0 && d<=NOTA)
            console.log(`El promedio de la nota ${a}, ${b}, ${c} y ${d} es `, promedio(a,b,c,d));

        else
            console.log(`Las notas ingresadas no son validas`);
        
    }
   // resultado2();
})();

(function ejercicio3(){
    //Calcular el área de un rectángulo
    function area_rectangulo(b,h){
        return b * h;
    }

    function resultado3(){
        let b = Number(prompt("Ingresar la base del rectangulo"));
        let h = Number(prompt("Ingresar la altura del rectangulo"));

        console.log(`El area del rectangulo es :`, area_rectangulo(b,h));
    }
    //resultado3();
})();

(function ejercicio4(){
    //Calcular el área de un triángulo
    function area_triangulo(b,h){
        return b * h / 2;
    }

    function resultado4(){
        let b = Number(prompt("Ingresar la base del triángulo"));
        let h = Number(prompt("Ingresar la altura del triángulo"));

        console.log(`El area del triángulo es :`, area_triangulo(b,h));
    }
   // resultado4();
})();

(function ejercicio5(){
    //Calcular el área de un triángulo
    function area_circ(r){
        return 3.14 * (r ** 2);
    }

    function resultado5(){
        let r = Number(prompt("Ingresar el radio de la circunferencia"));

        console.log(`El area la circunferencia es :`, area_circ(r));
    }
    //resultado5();
})();

(function ejercicio6(){
    //Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre
    function salarios(horas,salario){
        let dia = salario/30;
        let hora = dia/horas;
        return hora*horas*7;
    }

    function resultado6(){
        let horas = Number(prompt("Ingresar horas trabajadas"));
        let salario = Number(prompt("Ingresar salario del trabajador"));

        console.log(`el sueldo semanal del trabajador es `, salarios(horas,salario));
    }
   // resultado6();
})();

(function ejercicio7(){
    /*Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. (1 pulgada = 0.0254 m).*/

    function pulgadas(metro){
        let m = metro * 39.3701;
        return m.toFixed(2);
    }

    function resultado7(){
        let metro = prompt("Ingrese los metros de la tela");
        console.log(`${metro}m convertido a `,pulgadas(metro),"pulgadas");
    }
    //resultado7();
})();

(function ejercicio8(){
    //Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano.
    function dolar(sol){
        let sole = sol / 4;
        return sole.toFixed(2);
    }

    function resultado8(){
        let sol = prompt("Ingrese monto en soles");
        console.log(`La conversion de S/ ${sol} a dolares = $`,dolar(sol), );
    }
    //resultado8();
})();

(function ejercicio9(){
    //Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron
    function anio (anionac){
        let ANIOACTUAL = 2021;
        return ANIOACTUAL-anionac;
    }

    function resultado9(){
        let anionac = Number(prompt("Ingresar año de nacimiento"));

        console.log(`El año de nacimiento ${anionac} tiene` , anio(anionac),"años de edad");
    }
   // resultado9();
})();

(function ejercicio10(){
    //Se tiene el nombre y la edad de tres personas. Se desean saber el nombre y la edad de la persona de menor edad. 

    function resultado10(){
        let n1 = "Juana";
        let n2 = "Pedro";
        let n3 = "Diego";
        let e1 = Number(prompt("Escribir primera edad"));
        let e2 = Number(prompt("Escribir segunda edad"));
        let e3 = Number(prompt("Escribir tercera edad"));

        if(e1<e2 && e1<e3)
        console.log(`El trabajador de menor edad es ${n1} con ${e1} año(s)`);

        else if(e2<e1 && e2<e3)
        console.log(`El trabajador de menor edad es ${n2} con  ${e2} año(s)`);

        else if(e3<e1 && e3<e2)
        console.log(`El trabajador de menor edad es ${n3} con  ${e3} año(s)`);

        else if(e1==e2 || e2==e3)
        console.log(`Todos los trabajadores tienen la misam edad`);
    }

    // resultado10();
})();

(function ejercicio11(){
    //Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo ,que permita determinar el bono que recibirá un trabajador
   
    function resultado11(){
        let a = 5;
        let bono = 100;
        let anio = Number(prompt("Ingresar año"));

        for(i=2; i<=anio; i++){
            bono = bono+100;
        }
        if(anio>a){
            console.log(`Bono de $ 1000 por ${anio} año(s) de antiguedad`);
        }else{
            console.log(`Bono de $ ${bono} por ${anio} año(s) de antiguedad`);
        }
    }
    //resultado11();
})();

(function ejercicio12(){
    /*Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el algoritmo y representan la solución, utilizando el ciclo apropiado.*/

    function resultado12(){
        let anio = 1;
        let salarioi =1500;
        let incremento = 10;

        for(i=anio; i<=6; i++){
            console.log(`El salario del ${incremento}% por ${i} año es de ${salarioi*incremento/100}`,);
            incremento = incremento+10;
        }
    }
    //resultado12();
})();

(function ejercicio13(){
    //Realice un algoritmo para leer las calificaciones de N alumnos y determine el número de aprobados y reprobados.

    function promedio(nota1,nota2,nota3,nota4){
        let promedio = (nota1+nota2+nota3+nota4)/4
        if(promedio >= 13 && promedio <= 20){
            console.log(`El promedio de la nota ${nota1}, ${nota2}, ${nota3} y ${nota4} es de ${promedio} y esta APROBADO`); 

        }else if(promedio >= 0 && promedio < 13){
            console.log(`El promedio de la nota ${nota1}, ${nota2}, ${nota3} y ${nota4} es de ${promedio} y esta DESAPROBADO`);

        }else if(promedio > 20 || promedio < 0){
            console.log(`Promedio no Valido`);
        }
    }

    function conteo(){
        let nota1=Number(prompt(`Ingresar nota 1`));
        let nota2=Number(prompt(`Ingresar nota 2`));
        let nota3=Number(prompt(`Ingresar nota 3`));
        let nota4=Number(prompt(`Ingresar nota 4`));
        
        if(nota1>=0 && nota1<=20 && nota2>=0 && nota2<=20 && nota3>=0 && nota3<=20 && nota4>=0 && nota4<=20){
            promedio(nota1,nota2,nota3,nota4);
        }else{
            console.log(`Una de las notas no es Valido`);
        }
        

    }
    //conteo();
})();

(function ejercicio14(){
//Una compañía, fabrica focos de colores (verdes, blancos y rojos). Se desea contabilizar, de un lote de N focos(matrices), el número de focos de cada color que hay en existencia. 
    function colores(){
        let colores =["verde", "blanco" , "rojo"]
        let numero1 = Number(prompt(`Ingresar Numero para los focos de color ${colores[0]}`));
        let numero2 = Number(prompt(`Ingresar Numero para los focos de color ${colores[1]}`));
        let numero3 = Number(prompt(`Ingresar Numero para los focos de color ${colores[2]}`));

        console.log(`Hay ${numero1} focos de color ${colores[0]}`);
        console.log(`Hay ${numero2} focos de color ${colores[1]}`);
        console.log(`Hay ${numero3} focos de color ${colores[2]}`);
    }

    //colores();


})();

(function ejercicio15(){
    //Realice un algoritmo para determinar si una persona puede votar con base en su edad en las próximas elecciones. 

    function validacion(edad){
        if(edad>18){
            console.log(`Usted tiene ${edad} años y si puede votar en las proximas elecciones `);
        }else{
            console.log(`Usted tiene ${edad} años y no puede votar en las proximas elecciones `);
        }
    }


    function resultado15(){
        let edad = Number(prompt(`Ingrese edad`));
        validacion(edad);
    }

    resultado15();
})();


