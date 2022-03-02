export interface ITodoItem{
    id?: number;
    todo: string;
}

export interface ITodoList extends ITodoItem{
    data: ITodoItem[];
}
