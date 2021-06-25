import data from "./data.json";

const initialState = {
    todos: data.todos,
};
const todosReducer = (prevState: any = initialState, action: any) => {
    switch (action.type) {
        case "TODOS.ADD":
            return {
                todos: [...prevState.todos, action.payload],
            };
            break;
        case "TODOS.UPDATE":
            const id = action.todos.id;
            const nL = prevState.todos.map((t: any) => {
                if (t.id === id) return action.payload;

                return t;
            });
            break;
        case "TODOS.REMOVE":
            // Se hace con un filter
            const newTodos = prevState.todos.filter(
                (todo: any) => todo.id !== action.payload.id
            );

            return {
                todos: newTodos,
            };
            break;
        default:
            return prevState;
            break;
    }

    return {
        todos: [],
    };
};

export default todosReducer;
