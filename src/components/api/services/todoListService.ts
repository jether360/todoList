import axios from "axios";
import {ITodoItem} from "../models/todoList";
//import {createAPIEndpoint} from "../services/index";

//createAPIEndpoint('TodoList').create;


const Todo = {
    createTodo:  async (values : ITodoItem): Promise<ITodoItem> => {
        const response = await axios.post('https://localhost:5001/api/TodoList', values);
        return response.data;
    }
}

export default Todo;