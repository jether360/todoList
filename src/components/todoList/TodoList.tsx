import React from "react";
import TodoListForm from "../todoListForm/TodoListForm";

import { observer } from "mobx-react";
import List from "./List";

const TodoList = () => {

  return (
    <div>
      <h1 className="todo-list-h1">Todo List</h1>
      <TodoListForm />
      <List/>
    </div>
  );
};
export default observer(TodoList);
