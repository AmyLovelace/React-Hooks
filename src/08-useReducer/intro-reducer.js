console.log('hola mundo')
const initialState = [{
    id: 1,
    todo: 'crear Proyect Mayhem',
    done: false,

}] ;

const todoReducer = (state = initialState, action ={}) => {// recibe 2 argumentos 
    if(action.type === 'type:[TODO] add todo'){
        return[...state, action.payload ];

    }

    return state;//retorna el estado puede ser variado su tipo 
}

let todos = todoReducer();

const newTodo = {
    id:2,
    todo:'Take over Tyler´s body and mind',
    done: false
}
console.log(todos)

const addTodoAction={
    type:'[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction );

console.log({state:todos})
