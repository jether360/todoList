import React, {useEffect, useState} from "react";
import { Card, Col, Layout, Row } from "antd";
import * as Yup from "yup";
import { Form, Input, SubmitButton } from "formik-antd";
import { Formik } from "formik";
//import TodoStore from "../api/store/TodoStore";
import { ITodoItem } from "../api/models/todoList";
import { useStore } from "../api/store/store";
import { observer } from "mobx-react";
//import { withRouter } from "react-router-dom";



const validationSchema = Yup.object().shape({
  todo: Yup.string().required("Required"),
});

const { Content } = Layout;
//const {createTodo} = TodoStore;
const TodoListForm = () => {
  const { todoStore } = useStore();
  const { createTodo, todoForm, setTodoForm } = todoStore;
  //const [data, setData] = useState([])
  //console.warn("props",id)
  
  //useEffect(()=>{
  //  setTodoForm(id);
  //},[id, setTodoForm])

  return (
    <Layout
      className="layout"
      style={{  backgroundColor: "#fff", marginTop: "20px" }}
    >
      <Content>
        <Row justify="center" style={{ height: "100%" }}>
          <Col span={5}>
            <Row
              justify="center"
              align="middle"
              style={{ marginRight: 25 }}
            ></Row>
            <Card className="todo-list-card">
              <Formik
               enableReinitialize
                validationSchema={validationSchema}
                initialValues={todoForm}
                onSubmit={(values: ITodoItem, { resetForm }) => {
                  if (values.todo != null) {
                    createTodo(values);
                   // alert("Todo added successfully");
                    resetForm();
                    //window.location.reload();
                    console.log(values.todo);
                  }
                }}
              >
                {() => (
                  <Form layout="vertical">
                    <Form.Item name="todo">
                      <Input
                        name="todo"
                        placeholder="Input todo"
                        size="large"
                      />
                    </Form.Item>
                    <SubmitButton
                      type="primary"
                      size="large"
                      block
                      className="todo-list-form-btn"
                    >
                      Submit
                    </SubmitButton>
                  </Form>
                )}
              </Formik>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default observer(TodoListForm);
