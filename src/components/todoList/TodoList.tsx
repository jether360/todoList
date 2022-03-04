import React, { useEffect, useState } from "react";
import TodoListForm from "../todoListForm/TodoListForm";
import { useStore } from "../api/store/store";
//import Todo from "../api/services/todoListService";
import {ITodoItem} from "../api/models/todoList";
import { observer } from "mobx-react";
import { createAPIEndpoint, ENDPOINTS } from "../api/services";

const TodoList = () => {
  const { todoStore } = useStore();
  const { todos,setTodo } = todoStore;

  useEffect(()=>{
    createAPIEndpoint(ENDPOINTS.TODOLIST).getAll()
    .then(res =>{
       let todoList = res.data.map((item: { id: any; todo: any; }) =>({
        id: item.id,
        todo: item.todo
       }));
       todoList = [{id:0, todo: '' }].concat(todoList);
       setTodo(todoList);
    })
   
    .catch(err => console.log(err))
  })
  
  return (
    <div>
      <h1 className="todo-list-h1">Todo List</h1>
      <TodoListForm />
      <ul>
        {todos.map((item,index)=>{
          return(
            <li key={index}>
              {item.todo}
            </li>
          )
        })}
      </ul>
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
