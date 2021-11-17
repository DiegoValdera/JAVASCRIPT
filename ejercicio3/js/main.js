const usuario ={
    nombre:'Diego',
    edad:27,
    correo:'segundo_jacinto@hotmail.com'
}

console.log(`el arreglo es ${usuario.edad}`, usuario.nombre.toLocaleUpperCase());

setTimeout(() =>{
    console.log('ejecuta despues de 2segundos',`mi correo es : ${usuario.correo}`, usuario.correo.toLocaleUpperCase());
},2000);


/*PARA ABRIR UN UNA VENTANA EMERGENTE*/
document.querySelector('a').onclick = (e)=>{
e.preventDefault();
window.open('https://app.powerbi.com/view?r=eyJrIjoiMjdjNWQ5OTQtYTgyOS00MTU3LTliZTgtODcwZWIyNTk4OTRkIiwidCI6ImUxMjI4MjgxLTk4YmMtNGM4ZS05OTg5LWQxNmYxMzIyOGVkYiJ9','pagina_CON','width=400', 'height=400', 'left=10pz','top=0');
};


