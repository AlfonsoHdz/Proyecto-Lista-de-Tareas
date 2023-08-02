document.addEventListener('DOMContentLoaded', function(){
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const table = document.getElementById('table');
    const alert = document.getElementById('alert');
    const btn = document.getElementById('add');
    let id = 1;

    function removeTodo(id){
        document.getElementById(id).remove();
    }
    
    function addTodo(){
        if(title.value === '' || description.value === '')
        {
            alert.classList.remove('d-none');
            alert.innerText = 'Title and description are required';
            return;
        }

        alert.classList.add('d-none');

        //Creamos una nueva fila en la tabla
        const row = table.insertRow();

        //Agregamos un nuevo atributo a la fila 
        //id = 1,2,3.....
        row.setAttribute('id',id++);

        row.innerHTML = `
            <td>${title.value}</td>
            <td>${description.value}</td>
            
            <td class="text-center">
                <input type="checkbox">
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                  <i class="fa fa-pencil"></i>
                </button>
            </td>
        `;

        //No agregamos el boton en el innerHTML
        //Para utilizar la constante con un evento
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn','btn-danger','mb-1','ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';

        //Creamos el evento con la funcion
        removeBtn.onclick = function(e){
            //Llamamos a la funcion y le pasamos el parametro de ID
            removeTodo(row.getAttribute('id'));
        }
        //El children 3 es el td con la clase text-right del innerHTML
        row.children[3].appendChild(removeBtn);

        
    }

    //Agregamos el evento al boton
    //Llamamos a la funcion pero sin parametros ()
    btn.onclick = addTodo;

    
})



