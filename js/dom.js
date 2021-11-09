const h1 = document.querySelector('h1');
console.log(h1);
h1.textContent="Texto modificado";
h1.style.color='grey';
h1.style.fontSize = '24px';

h1.onclick = function(){
    h1.style.backgroundColor='pink';
    h1.style.color='grey';
    this.style.fontSize = `${Number(this.style.fontSize.replace('px', ''))+5}px`;
}

h1.onmouseover = function(){
    h1.style.background='grey';
    h1.style.color='#fff';
}

h1.onmouseout =function(){
    h1.style.background='#fff';
    h1.style.color='grey';
}

function submitForm(){
    let form = document.querySelector('form');
    const nomb = document.querySelector('.js_nombre');
    const dni = document.querySelector('.js_dni');
    const contra = document.querySelector('.js_contra');

    form.onsubmit = function(event){
        event.preventDefault();
        console.log('el nombre es:', nomb.value);
        console.log('el dni es: ', dni.value);
        console.log('el contraseña es', contra.value);
    };
}
submitForm();


//queryselector
const lista = document.getElementsByTagName('a');
for(let index = 0; index < lista.length; index++){
    lista[index].style.color = '#fff';
    lista[index].style.backgroundColor = 'pink';
}

// selectores relativos
const ul = document.querySelector('ul');
ul.style.backgroundColor='purple';
console.log('childnodes', ul.childNodes); //childnodes
console.log('children', ul.children); // children
console.log('firstChild', ul.firstChild); // firstChild
console.log('lastElementChild', ul.lastElementChild); // lastElementChild
