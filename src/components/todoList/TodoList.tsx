import react from 'react';


const TodoList = (props: any) => {
    return (
        <div>
            <h1>Todo List</h1>
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