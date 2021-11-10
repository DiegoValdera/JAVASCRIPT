const btn1 = document.querySelector('.js_btn1');
const btn2 = document.querySelector('.js_btn2');
const ejercicio2 = document.querySelector('.container');

btn1.onclick = function(){
    alert('hola mundo');
}

btn2.onclick = function(){
    if(ejercicio2.style.display==='none'){
        btn2.textContent='Cerrar dropdown';
        ejercicio2.style.display='block';
    }else{
        btn2.textContent='Abrir dropdown';
        ejercicio2.style.display='none';
    }
}