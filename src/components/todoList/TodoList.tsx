import React, { useEffect } from "react";
import TodoListForm from "../todoListForm/TodoListForm";
import { useStore } from "../api/store/store";
import Todo from "../api/services/todoListService";

const TodoList = () => {
  const { todoStore } = useStore();
  const { todoList } = todoStore;

  return (
    <div>
      <h1 className="todo-list-h1">Todo List</h1>
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
export default TodoList;
