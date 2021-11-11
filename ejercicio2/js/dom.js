const inputnombre = document.querySelector('.js_nombre');
const inputape = document.querySelector('.js_apellido');
const inputTelf = document.querySelector('.js_telf');
const inputdireccion = document.querySelector('.js_direccion');
const inputfoto = document.querySelector('.js_fotografia');
const inputalias = document.querySelector('.js_alias');
    const formulario = document.querySelector('form');
    const app = document.getElementById('app');

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const article = document.createElement('article');

    article.innerHTML=`
        <div class="image">
            <img src=${inputfoto.value} alt="${inputnombre.value} ${inputape.value}">
        </div>

        <div class="body-card">
            <span>${inputnombre.value} ${inputape.value}</span>
            <h3>${inputalias.value}</h3>
            <h3><i class='bx bx-phone'></i> ${inputTelf.value} </h3>
            <h3><i class='bx bxs-home' ></i>${inputdireccion.value}</h3>
            <div><button><i class='bx bxs-x-circle'></i></button></div>
        </div>
    `
    article.classList.add('card');
    article.querySelector('button').onclick = function(){
        const flag = confirm('Esta seguro de eliminar registro');
        if(flag) app.removeChild(article)

    }
    app.appendChild(article);
    this.reset();
})



