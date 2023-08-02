import Model from "./model.js"
import View from "./view.js"

//Espera a que se carge todo el HTML
document.addEventListener('DOMContentLoaded', () => {
    //Hacemos la instancia de las clases
    const model = new Model();
    const view = new View();

    //Asignamos la vista a la funcion que esta en Model
    model.setView(view);
    //Ahora asignamos a la View
    view.setModel(model);


})


//EJEMPLO DE FUNCIONES QUE LLAMAN OTRAS
//Y DE las Arrow Functionss
// function test(num, f){
//     return f(num);
// }

// function dup(num){
//     return num*2;
// }

// test(5,dup);
// test(5, function(num){
//     return num * 2;
// })
// test(5, (num) => num *2);

