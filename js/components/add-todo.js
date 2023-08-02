export default class AddTodo{
    constructor(){
        //Colocamos el atributo a la clase
        //const btn = document.getElementById('add');  (ESO YA NO WACHO)
        this.btn = document.getElementById('add');
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');
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
                console.error('Incorrecto');
            }else{
                //Llamamos la funcion del parametro y le pasamos los atrubutos
                callback(this.title.value,this.description.value);
            }

        }
    }
}