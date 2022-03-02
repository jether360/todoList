import { action, makeObservable, observable,runInAction } from "mobx";
import Todo from "../services/todoListService";
import {ITodoItem, ITodoList} from "../models/todoList";

class TodoStore{
   // todos: TodoItem[] = [];
    todos : ITodoItem | undefined = {} as ITodoItem;
    todoList: ITodoList[] = [];
    constructor(){
        makeObservable(this, {
            todos: observable,
            createTodo: action,
        })
    }

  //  addTodo(todo:string){
        //const item: TodoItem = {
            //id: ,
       // }
  //  }
  createTodo = async (todo: any) => {
    try {
        if(todo != null){
            const response = await Todo.createTodo(todo);
            this.todos = response;
        }
    } catch (error) {
        console.log(error);
    }
  }
    getAllTodo = async () => {
        try {
            const response = await Todo.getAllTodos();
            this.todoList = [response];
        } catch (error) {
            console.log(error);
        }
    }
}
export default TodoStore;