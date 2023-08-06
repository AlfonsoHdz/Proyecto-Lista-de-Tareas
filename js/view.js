import AddTodo from "./components/add-todo.js";

export default class View{
    constructor(){
        //Declaramos la variables (Instanciamos)
        //Atributos de la clase
        this.model = null;
        this.table = document.getElementById('table');
       
        //Instanciamos la clase
        this.addTodoForm = new AddTodo();
        
        //ESTE CODIGO SOLO ACCEDE A OBJETO DE FUNCTION
        //NOTA: REVISA LAS NOTAS PA ENTENDER

        // btn.onclick = function(){
        //     this.addTodo('Titulo','Desc');
        // }

        //Utilizamos una function anonima, para acceder a addTodo (Metodo)
        //btn.onclick = () => {this.addTodo('Titulo','Desc');}

        //Llamamos a la funcion del addTODO
        //Creamos una funcion anonima y le pasamos los parametros a al addTodo de abajo
        this.addTodoForm.onClick((title, description) => this.addTodo(title, description));

    }

    setModel(model){
        //Asignacion
        this.model = model;
    }

    render(){
        const todos = this.model.getTodos();
        for(let i=0; i < todos.length; i++ ){
            this.createRow(todos[i]);
        }
        
    }

    addTodo(title, description){
        //Invocamos el addTodo del Model
        const todo = this.model.addTodo(title, description);
        //Llamamos a la funcion para crear el row+html
        this.createRow(todo);

        //Aunque conloquemos YOUTUBE, ahora solo aplica para la vista
        //Por eso hizimos el clon en el modelo xd...
        //todo.title = 'YOUTUBE';
    }

    toggleCompleted(id){
        this.model.toggleCompleted(id);
    }

    removeTodo(id){
        //Eliminamos el elemento del model
        this.model.removeTodo(id);
        //Borramos la vista
        document.getElementById(id).remove();
        
    }

    createRow(todo){
        //Creamos una nueva fila en la tabla
        const row = table.insertRow();

        //Agregamos un nuevo atributo a la fila 
        //id = 1,2,3.....
        row.setAttribute('id', todo.id);

        row.innerHTML = `
            <td>${todo.title}</td>
            <td>${todo.description}</td>
            
            <td class="text-center">
                                                
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                  <i class="fa fa-pencil"></i>
                </button>
            </td>
        `;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.onclick = () => this.toggleCompleted(todo.id);
        row.children[2].appendChild(checkbox);

        //No agregamos el boton en el innerHTML
        //Para utilizar la constante con un evento
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn','btn-danger','mb-1','ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';

        //Creamos el evento con la funcion
         //Llamamos a la funcion y le pasamos el parametro de ID
        removeBtn.onclick = () => this.removeTodo(todo.id);
        
        //El children 3 es el td con la clase text-right del innerHTML
        row.children[3].appendChild(removeBtn);

    }
}