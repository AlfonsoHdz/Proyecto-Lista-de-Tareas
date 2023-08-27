import AddTodo from "./components/add-todo.js";
import Modal from "./components/modal.js";
import Filters from './components/filters.js'

export default class View{
    constructor(){
        //Declaramos la variables (Instanciamos)
        //Atributos de la clase
        this.model = null;
        this.table = document.getElementById('table');
       
        //Instanciamos la clase
        this.addTodoForm = new AddTodo();
        this.modal = new Modal();
        this.filters = new Filters();
        
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
        this.modal.onClick((id, values) => this.editTodo(id, values));
        this.filters.onClick((filters) => this.filter(filters))

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

    filter(filters){
        const {type, words} = filters;
        const [, ...rows] = this.table.getElementsByTagName('tr');
        for(const row of rows){
            const[title, description, completed] = row.children;
            let shouldHide = false;

            if(words){
                shouldHide = !title.innerText.includes(words) && !description.innerText.includes(words);
            }

            const shouldBeCompleted = type === 'completed';
            const isCompleted = completed.children[0].checked;

            if(type !== 'all' && shouldBeCompleted !== isCompleted){
                shouldHide = true;
            }

            if(shouldHide){
                row.classList.add('d-none');
            }else{
                row.classList.remove('d-none');
            }
            
            
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

    editTodo(id, values){
        this.model.editTodo(id, values);
        const row = document.getElementById(id);
        row.children[0].innerText = values.title;
        row.children[1].innerText = values.description;
        row.children[2].children[0].checked = values.completed;
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
                
            </td>
        `;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.onclick = () => this.toggleCompleted(todo.id);
        row.children[2].appendChild(checkbox);


        const editBtn = document.createElement('button');
        editBtn.classList.add('btn','btn-primary','mb-1');
        editBtn.innerHTML = '<i class="fa fa-pencil"></i>';
        editBtn.setAttribute('data-toggle','modal');
        editBtn.setAttribute('data-target','#modal');
        editBtn.onclick = () => this.modal.setValues({
            id: todo.id,
            title: row.children[0].innerText,
            description: row.children[1].innerText,
            completed: row.children[2].children[0].checked, 
        });
        row.children[3].appendChild(editBtn);

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