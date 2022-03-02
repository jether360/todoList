import axios from "axios";
import {ITodoItem, ITodoList} from "../models/todoList";

const Todo = {
    createTodo:  async (values : ITodoItem): Promise<ITodoItem> => {
        const response = await axios.post('https://localhost:5001/api/TodoList', values);
        return response.data;
    },
    getAllTodos: async (): Promise<ITodoList> => {
        const response = await axios.get('https://localhost:5001/api/TodoList');
        return response.data;
    }
}

export default Todo;