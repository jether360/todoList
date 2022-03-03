import React, { useEffect } from "react";
import TodoListForm from "../todoListForm/TodoListForm";
import { useStore } from "../api/store/store";
import Todo from "../api/services/todoListService";
import {ITodoItem} from "../api/models/todoList";
import { observer } from "mobx-react";

const TodoList = () => {
  const { todoStore } = useStore();
  const { todoList,todos } = todoStore;

  
  return (
    <div>
      <h1 className="todo-list-h1">Todo List</h1>
      <ul>
        {todos.map((todo, index)=>{
          return <li key={index}>{todo.todo}</li>
        })}
      </ul>
      <TodoListForm />
      {/*
            <ul>
                {props.todos.map((todo: any) => {
                    return (
                        <li key={todo.id}>
                            {todo.text}
                        </li>
                    );
                })}
            </ul>
            */}
    </div>
  );
};
export default observer(TodoList);
