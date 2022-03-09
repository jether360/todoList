import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { createAPIEndpoint, ENDPOINTS } from "../api/services";
import { Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "../api/store/store";
//import TodoListForm from "../todoListForm/TodoListForm";
import { Link, useHistory } from "react-router-dom";

const List = () => {
  let history = useHistory();
  const { todoStore } = useStore();
  const { todos, setTodo, deleteTodo, setTodoForm } = todoStore;

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
    <>
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
                    onClick={() => {
                      //<TodoListForm id={item.id}/>
                      //   setTodoForm(item.id)
                      history.push("/update/" + item.id);
                    }}
                  />
                </Col>
                <Col>
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{ color: "#E24943" }}
                    onClick={() => {
                      deleteTodo(item.id);
                    }}
                  />
                </Col>
              </Row>
            </h3>
          </Row>
        );
      })}
    </>
  );
};

export default observer(List);
