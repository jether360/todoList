import React, {useEffect} from 'react';
import TodoListForm from '../todoListForm/TodoListForm';


const TodoList = () => {
    return (
        <div>
            <h1 className='todo-list-h1'>Todo List</h1>
            <TodoListForm />
            {
                /*
            <ul>
                {props.todos.map((todo: any) => {
                    return (
                        <li key={todo.id}>
                            {todo.text}
                        </li>
                    );
                })}
            </ul>
            */
            }
        </div>
    );
}
export default TodoList;