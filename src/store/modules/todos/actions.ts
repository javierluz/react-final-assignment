export const addTodoAction = (todo: any) => {
    return {
        type: "TODOS.ADD",
        payload: todo,
    };
};

export const removeTodoAction = (todo?: any) => {
    return {
        type: "TODOS.REMOVE",
        payload: todo,
    };
};
