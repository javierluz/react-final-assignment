import styles from './Form.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux'
import { addTodoAction } from '../../store/modules/todos/actions';
import { useState } from 'react';
// import { doctorsSelector } from '../../store/modules/doctors/selectors';


const Form = () => {
    // const doctors: any = useSelector(doctorsSelector);
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const handlerChangeTitle = (event: any) => {
        const value = event.target.value;
        setTitle(value);
    }

    const handlerAddTodoSubmit = (event: any) => {
        event.preventDefault();
        dispatch(addTodoAction({
            id: new Date().getTime(),
            title,
        }));

        // Clear Local Input
        setTitle('');
    }

    return (
        <div className={`${styles.formContainer} mb-4`}>
            <div className="p-4">
                <h1 className="h3 mb-2">Add Tasks</h1>

                <form noValidate onSubmit={handlerAddTodoSubmit}>
                    <label htmlFor="new-doctor-name">Title</label>
                    <div className={`${styles.formGroupAdd} form-group mb-2`}>
                        <input type="text" id="new-doctor-name" name="new-doctor-name" className="form-control" placeholder="I.e. Peter Capaldi" value={title} onChange={handlerChangeTitle} />

                        <div className={`${styles.areaIcon}`}>
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                    </div>
                    <div className="actions">
                        <button className="btn btn-primary btn-sm" type="submit">Add Item</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
