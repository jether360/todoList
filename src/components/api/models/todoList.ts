export interface ITodoItem{
    id?: number;
    todo: string;
}

export interface ITodoList extends ITodoItem{
    data: ITodoItem[];
}

export class TodoFormValues implements ITodoItem {
    todo = '';

    constructor(init?: ITodoItem) {
        Object.assign(this, init);
    }
}