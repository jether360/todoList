import { action, makeObservable, observable, runInAction } from "mobx";
import Todo from "../services/todoListService";
import { ITodoItem, ITodoList,TodoFormValues } from "../models/todoList";

class TodoStore {
  // todos: TodoItem[] = [];
  todos: ITodoItem[] = [] as ITodoItem[];
  todoList: ITodoList[] = [];
  //todoList: ITodoItem[] = [];
  todoForm: ITodoItem = new TodoFormValues();

  constructor() {
    makeObservable(this, {
      todos: observable,
      createTodo: action,
      getAllTodo:action,
      deleteTodo:action
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

 setTodoForm = (id?:any | undefined) => {
    try {
      if(id){
       const todoForm = this.todos.find((x) => x.id === id);
       // alert(id);
       // this.todoForm = new TodoFormValues(todoForm);
      
       //window.location.reload();
        runInAction(()=>{
         this.todoForm = new TodoFormValues(todoForm);
        // debugger;
        })
      }
    } catch (error) {
      console.log(error);
    }
 }
 
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

   updateTodo = async (id: number, values:ITodoItem) => {
    try {
      const response = await Todo.update(id, values);
      this.todos = [response];
    } catch (error) {
      console.log(error);
    }
  }

  deleteTodo =async (id:any) => {
      try {
        const response = await Todo.deleteTodo(id);
        this.todos = [response];
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
  }

}
export default TodoStore;
