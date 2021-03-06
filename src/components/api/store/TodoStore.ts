import { action, makeObservable, observable, runInAction } from "mobx";
import Todo from "../services/todoListService";
import { ITodoItem, ITodoList, TodoFormValues } from "../models/todoList";

class TodoStore {
  // todos: TodoItem[] = [];
  todos: ITodoItem[] = [] as ITodoItem[];
  todoList: ITodoList[] = [];
  //todoList: ITodoItem[] = [];
  todoForm: ITodoItem = new TodoFormValues();
  updateForm: ITodoItem = new TodoFormValues();
  isLoading: boolean = true;


  constructor() {
    makeObservable(this, {
      todos: observable,
      createTodo: action,
      getAllTodo: action,
      deleteTodo: action,
      setTodoForm: action,
    });
  }

  createTodo = async (todo: any) => {
    try {
      if (todo != null) {
        const response = await Todo.createTodo(todo);
        runInAction(() => {
          //this.todos = [response]; 
          this.getAllTodo();
        })
      }
    } catch (error) {
      console.log(error);
    }
  };

  updateTodo = async (id: number, values: ITodoItem) => {
    try {
      const response = await Todo.update(id, values);
      //this.todos = [response];
      //return response;
      runInAction(() => {
        //this.todos = [response]; 
        this.getAllTodo();
      })
    } catch (error) {
      console.log(error);
    }
  };

  deleteTodo = async (id: any) => {
    try {
      const response = await Todo.deleteTodo(id);
      runInAction(() => {
        //this.todos = [response]; 
        this.getAllTodo();
      })
    } catch (error) {
      console.log(error);
    }
  };

  setTodoForm = (id: number) => {
    try {
      if (id) {
        //const todoForm = this.todos.find((x) => x.id === id);
        // alert(id);
        // this.todoForm = new TodoFormValues(todoForm);
        return this.getTodoById(id).then((values:any) => {
          runInAction(() => {
            debugger;
            this.updateForm = new TodoFormValues(values.data);
          });
        });
      } else {
        //window.location.reload();
        runInAction(() => {
          // this.todoForm = new TodoFormValues(todoForm);
          // debugger;
          this.updateForm = new TodoFormValues();
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  getTodoById = async (id: number) => {
    try {
      const todo = await Todo.getById(id);
      return todo;
    } catch (error) {
      console.log(error);
    }
  };

  setTodo = (values: any) => {
    runInAction(() => {
      this.todos = values;
    });
  };

  getAllTodo = async () => {
    try {
      const response = await Todo.getAllTodos();
      //this.todos = [response];
      runInAction(() => {
        this.todos = response.data;
      });
    } catch (error) {
      console.log(error);
    }
  };


 
}
export default TodoStore;
