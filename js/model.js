//Al class Model se agrega el export defautl
//Para luego importarlo la main index

export default class Model{
    //Creamos la funcion de Constructor
    //No hace falta colocar function antes del nombre
    constructor(){
        this.view = null;
        this.todos = [];
        this.currentId = 1;
    }

    //Funcion que recibe una vista
    setView(view){
        //Asignamos la vista a la vista que nos pasan
        this.view = view;
    }

    //Obtenemos los TODOS 
    getTodos(){
        return this.todos;
    }

    //Podemos crear una funcion que haga lo de findIndex
    findTodo(id){
        return this.todos.findIndex((todo) => todo.id === id);
    }

    toggleCompleted(id){
        //const index = this.todos.findIndex((todo) => todo.id === id);
        
        const index = this.findTodo(id);
        const todo = this.todos[index];
        todo.completed = !todo.completed;
        console.log(this.todos);
    }

    addTodo(title, description){
        //Creamos el objeto del TODO
        const todo = {
            //Hacemos la asignacion propiedad y valor
            //En vez de Id: 1
            id: this.currentId++,
            //Si la porpiedad y valor coinciden en el nombre
            //En vez de title:tile
            title,
            description,
            completed: false
        }

        //Podemos acceder a sus atributos 
        //console.log(todo.id);

        //Agregamos el todo al Array de todos
        this.todos.push(todo);
        console.log(this.todos);

        //Con esto tengo la misma referencia/puntero
        //return todo;  ---------------------------------------

        //Entonces, regresamos un clon del objeto
        //A un objeto vacio {} le asignamos la porpiedades de todo
        //assign es el que copia las propiedades
        //return Object.assign({}, todo);  -----------------------------------

        //Es = con Spread Syntax, hace un clon :)
        //Expande los valores de todo y hace un clon revisa tus NOTAS xd
        return{...todo};

    }

    removeTodo(id){
        //finIndex recibe una funcion a realizar cuando encuentra el indice
        //Hace la funcion de un for/poreach para buscar el ID
        const index = this.todos.findIndex((todo) => todo.id === id);
        //Si lo encontro...
        //De los todos(es un array), con splice que borra los elementos que le especifiquemos a partir 
        //de un indice. Queremoa q borre solo 1 xd
        this.todos.splice(index,1);

    
    }

    
}