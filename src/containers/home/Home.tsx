import Todo from '../../components/todo/Todo';
import Form from '../../components/form/Form';

const Home = () => {
    return (
        <div className="Home">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <Form />

                        <Todo />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
