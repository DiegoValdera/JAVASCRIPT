(function ejercicio1(){
    //const nombre = prompt('Ingresar Nombre');
})();

const nombre = document.querySelector('.js_nomb');
const ape = document.querySelector('.js_ape');
const edad = document.querySelector('.js_edad');
const formulario = document.querySelector('form');
const tdr = document.getElementById('tdr');

formulario.addEventListener('submit',function(event){
    event.preventDefault();

    const tr = document.createElement('tr');
    tr.innerHTML=`
        
            <td>${nombre.value}</td>
            <td>${ape.value}</td>
            <td>${edad.value}</td>
            <td><button><i class='bx bxs-coffee-togo'></i></button></td>
        
    `

    tr.querySelector('button').onclick = function(){
        const flag = confirm('Esta seguro que desea eliminar');
        if(flag) tdr.removeChild(tr)
    }

    tdr.appendChild(tr);
    this.reset();
    console.log(tdr.appendChild(tr))
});






