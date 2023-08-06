import Alert from './alert.js';

export default class AddTodo{
    constructor(){
        //Colocamos el atributo a la clase
        //const btn = document.getElementById('add');  (ESO YA NO WACHO)
        this.btn = document.getElementById('add');
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');

        this.alert = new Alert('alert');
    }

    //Recibe una funcion 
    //callback funciones q recibes y que se ejecutan despues 
    onClick(callback){
        this.btn.onclick = () => {
            if(title.value === '' || description.value === '')
            {
                // alert.classList.remove('d-none');
                // alert.innerText = 'Title and description are required';
                // return;
                this.alert.show('Title and description are required');
            }else{
                //Llamamos la funcion del parametro y le pasamos los atrubutos
                this.alert.hide();
                callback(this.title.value,this.description.value);
            }

        }
    }
}