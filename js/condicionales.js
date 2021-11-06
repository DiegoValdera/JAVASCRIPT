//OPERADORES CONDICIONALES

(function condicionales(){
    const EDAD_SEX = 18;
    const SEX = "m";
    

    function welcome(name){
        return `Bienvenido al bar ${name}`; 
    }

    function nowelcome(name){
        return `No eres bienvenido ${name}`;
    }

    function elbar(){
        let name = prompt('Ingresar Nombre');
        let edad = Number(prompt('Ingresar su edad'));
        let sex = prompt('Ingresar Genero');

        if(edad >= EDAD_SEX && sex.toLocaleLowerCase()== SEX){
            alert(welcome(name));
        }else if(edad < EDAD_SEX){
            alert(nowelcome(name));
        }
    }

    //elbar();

})();

function savename(name){
    try{
        if(name.length<6) throw 'SHORT';
        if(name.length>10) throw 'LONG';
        
        message = `El nombre ${name} es correcto`;

    }catch(err){
        if(err == 'SHORT') message = `El nombre ${name} es muy corto`;
        if(err == 'LONG') message = `El nombre ${name} es muy largo`;

    }finally{
        console.log('Nombre evaluado: ', message);
    }
    
}
savename('Diego');
savename('Andrea');

