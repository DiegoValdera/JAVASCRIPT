const btn = document.querySelector('.js_btn1');
const ndropdown = document.querySelector('.container');
const texto = document.querySelector('.js_input');

btn.onclick = function(){
    if(ndropdown.style.display==='none'){
        btn.textContent='cerrar dropdown';
        ndropdown.style.display='block';
    }else{
        btn.textContent='abrir dropdown';
        ndropdown.style.display='none';
    }
}

texto.onkeypress= function(){
    const n = texto.value.length;
    if(n<=8){
        console.log(`corecto`);
    }else{
        console.log(`incorrecto`);
    }
}

 
