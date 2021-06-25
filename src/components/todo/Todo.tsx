import styles from './Todo.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { removeTodoAction } from '../../store/modules/todos/actions';
import { todosSelector } from '../../store/modules/todos/selectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Todo = () => {
    const todos: any = useSelector(todosSelector);
    console.log(todos.todos);
    const dispatch = useDispatch();

    const handlerRemoveTodoClick = (todo: any) => {
        // event.preventDefault();

        dispatch(removeTodoAction(todo));
    }

    return (
        <div className={`${styles.todoContainer}`}>
            <h1 className="h3">Doctors already called</h1>

            {
                todos.todos.length ?
                    todos.todos.map((todo: any, i: number) => (
                        <div key={i} className="card mb-2">
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="mb-0 d-flex align-items-center">{todo.title}</h5>

                                <div className="actions">
                                    <button onClick={() => handlerRemoveTodoClick(todo)} className="btn btn-secondary btn-sm">
                                        <FontAwesomeIcon icon={faTimes} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    <div className="alert alert-info">
                        <p className="mb-0"><strong>Oopsie!</strong> Looks like you haven't created any Todo just yet 👀.</p>
                    </div>
            }
        </div>
    );
}

export default Todo;
