(function bucles(){
    let n = 0;
    //FOR
    for(let i = 0 ; i <= 10 ; i++){
        console.log(i);
    }

    //WHILE
    while(n < 3){
        n++;
        console.log(`Hasta que coincida cumpla`);
    }

    //DO WHILE
    do{
        console.log(`al menos una sola vez`);
    }while(false);

    //BREAK
    for(i=0; i< 10; i++){
        console.log(`valores ${i}`);
        if(i>=4) break;
    }

    //CONTINUE
    for(i=0; i< 10; i++){
        console.log(`valores ${i}`);
        if(i==4 || i==5 || i == 6) continue;
        console.log(`continue ${i}`);
    }

    //FOR IN
    const perro = {
        raza:'pikines',
        edad: 3,
        color: 'blanco',
        altura: '80cm',
        pais: 'Peru'
    };

    for(const key in perro){
        console.log(`los item son ${key}`);
        console.log(`los valores de ${key} = ${perro[key]}`);
    }

})();
