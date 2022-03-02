import { makeObservable, observable } from "mobx";
import Todo from "../services/todoListService";
import {ITodoItem} from "../models/todoList";

class TodoStore{
   // todos: TodoItem[] = [];
    todos : ITodoItem | undefined = {} as ITodoItem;

    constructor(){
        makeObservable(this, {
            todos: observable,
        })
    }

  //  addTodo(todo:string){
        //const item: TodoItem = {
            //id: ,
       // }
  //  }
  createTodo = async (todo:any) => {
    try {
        if(todo != null){
            const response = await Todo.createTodo(todo);
            this.todos = response;
        }
    } catch (error) {
        console.log(error);
    }
  }
}
export default TodoStore;