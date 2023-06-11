import React from 'react';
import {TodoItem} from "./TodoItem";

export const TodoList = ({todos =[], onDeleteTodo, onToggleTodo}) => {
  
  
    return (
    <ul className="list-group">
                {
                    todos.map(todo =>(
                        //crear elemento todoItem
                        <TodoItem key={todo.id} todo={todo} onDeleteTodo = {onDeleteTodo} onToggleTodo={onToggleTodo}/>
                    ))
                }
                
                
    </ul>
  )
}

export default TodoList;
