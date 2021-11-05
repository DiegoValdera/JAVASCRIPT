/*
CREAR 5 FUNCIONES QAUE RETORNEN LA SUMA DE 2 VALORES CON LOS SIGUIENTES OPERADORES ARITMETICOS
FUNCION- suma, resta, multiplicacion, division y potencia

CREAR UN PROCEDIMIENTO DONDE SE PIDAN 2 VALORES Y ESTOS SE LE PASE A CADA UNA DE LAS FUNCIOENS TAMBIEN IMPRIMIR EL RESULTADO DE LAS FUNCIONES

--PARA OBTENER ESTOS DATOS DE a y b UTILIZAR PROMPT
*/ 
(function tarea_javascript(){

    function tarea(){

        function sum(a,b){
            console.log(a+b)
        }
        
        function resta(a,b){
            console.log(a-b)
        }
        
        function dividir(a,b){
            console.log(a/b)
        }
        
        function multiplicar(a,b){
            console.log(a*b)
        }
        
        function potenciar(a,b){
            let potencia = Math.pow(a,b);
            console.log(potencia)
        }

        let x = parseFloat(prompt("ingresar primer numero"));
        let y = parseFloat(prompt("ingresar segundo numero"));
    
        console.log("la suma de " +x+ " + " +y+ " es ", sum(x,y))
        console.log("la resta de " +x+ " - " +y+ " es ", resta(x,y))
        console.log("la division de " +x+ " / " +y+ " es ", dividir(x,y))
        console.log("la multiplicación de " +x+ " * " +y+ " es ", multiplicar(x,y))
        console.log("la potencia de " +x+ " ^ " +y+ " es ", potenciar(x,y))
    }

    tarea();
})();
