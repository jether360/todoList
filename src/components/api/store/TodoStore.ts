import { action, makeObservable, observable, runInAction } from "mobx";
import Todo from "../services/todoListService";
import { ITodoItem, ITodoList } from "../models/todoList";

class TodoStore {
  // todos: TodoItem[] = [];
  todos: ITodoItem[] = [] as ITodoItem[];
  todoList: ITodoList[] = [];
  //todoList: ITodoItem[] = [];
  

  constructor() {
    makeObservable(this, {
      todos: observable,
      createTodo: action,
      getAllTodo:action,
    });
  }

  createTodo = async (todo: any) => {
    try {
      if (todo != null) {
        const response = await Todo.createTodo(todo);
        this.todos = [response];
      }
    } catch (error) {
      console.log(error);
    }
  };
 // createTodo = async (todo: any) => {
   // try {
    //  if (todo != null) {
    //    const response = await Todo.createTodo(todo);
    //    this.todos.push(response);
   //   }
   // } catch (error) {
   //   console.log(error);
  //  }
 /// };
 setTodo = (values:any)=>{
  runInAction(()=>{
    this.todos = values;
  })
 }

   getAllTodo = async () => {
    try {
       const response = await Todo.getAllTodos();
     this.todos = [response];
     } catch (error) {
      console.log(error);
   }
   };

   updateTodo = async (id: number, values: ITodoItem) => {
    try {
      const response = await Todo.update(id, values);
      this.todos = [response];
    } catch (error) {
      console.log(error);
    }
  }

}
export default TodoStore;
