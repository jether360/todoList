import React, { useEffect, useState } from "react";
import TodoListForm from "../todoListForm/TodoListForm";
import { useStore } from "../api/store/store";
//import Todo from "../api/services/todoListService";
import { observer } from "mobx-react";
import { createAPIEndpoint, ENDPOINTS } from "../api/services";
import { Row, Col, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoList = () => {
  const { todoStore } = useStore();
  const { todos, setTodo, deleteTodo } = todoStore;
  //const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    createAPIEndpoint(ENDPOINTS.TODOLIST)
      .getAll()
      .then((res) => {
        let todoList = res.data.map((item: { id: any; todo: any }) => ({
          id: item.id,
          todo: item.todo,
        }));
        todoList = [].concat(todoList);
        setTodo(todoList);
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1 className="todo-list-h1">Todo List</h1>
      <TodoListForm />
      {todos.map((item, index) => {
        return (
          <Row justify="center">
            <h3 key={index} className="list">
              {index + 1 + ". "}
              {item.todo}
              <Row gutter={10} justify="end" style={{ marginRight: "2%" }}>
                <Col>
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    style={{ color: "#0077AE" }}
                  />
                </Col>
                <Col>
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{ color: "#E24943" }}
                    onClick={()=>{
                      deleteTodo(item.id);
                    }}
                  />
                </Col>
              </Row>
            </h3>
          </Row>
        );
      })}

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
