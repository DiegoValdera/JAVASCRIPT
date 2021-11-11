const inputname = document.querySelector('.js_name');
const inputape = document.querySelector('.js_apellido');
const inputedad = document.querySelector('.js_edad');
const inputphoto = document.querySelector('.js_photo');
const formulario = document.querySelector('form');
const app = document.getElementById('app');


formulario.addEventListener('submit', function(e){
    e.preventDefault();

    const article = document.createElement('article');
    article.innerHTML=`
    <div class="card">
        <h2> Nombre comopleto: <span> ${inputname.value} ${inputape.value} </span> </h2>
        <h2> Edad: <span> ${inputedad.value} </span> </h2>
        <figure>
            <img src="${inputphoto.value}" alt="${inputname.value} ${inputape.value}"/>
        </figure>
        <button>x</button>
    </div>
    `

    article.classList.add('card');
    article.querySelector('button').onclick = function(){
        const flag = confirm('Estas seguro que deseas eliminar la tarjeta');
        if(flag) app.removeChild(article)
    }
    app.appendChild(article);
    this.reset();
})







