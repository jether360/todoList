import axios from "axios";
import {ITodoItem, ITodoList} from "../models/todoList";

const Todo = {
    createTodo:  async (values : ITodoItem): Promise<ITodoItem> => {
        const response = await axios.post('https://localhost:5001/api/TodoList', values);
        return response.data;
    },
    getAllTodos: async (): Promise<ITodoList> => await axios.get(`https://localhost:5001/api/TodoList/`),
    getById : async (id: number ): Promise<ITodoItem> => await axios.get(`https://localhost:5001/api/TodoList/${id}`),
    update: async (id: number, values: ITodoItem): Promise<ITodoItem> => {
        const response = await axios.put(`https://localhost:5001/api/TodoList/${id}`, values);
        return response.data;
    },
    deleteTodo:async (id:number): Promise<ITodoItem> => {
        const response = await axios.delete(`https://localhost:5001/api/TodoList/${id}`);
        return response.data;
    }
}

export default Todo;