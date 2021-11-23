import Style from './Todos.module.css';
import classnames from 'classnames'
import PropTypes from 'prop-types';
import plus from "../../assets/plus-icon.svg";
import minus from "../../assets/minus-icon.svg";

const Todos = ({ todos, kurang, tambah }) => {
    return(
        <div className={Style.todos}>
            {todos.map((todo, index, arr) => {
                return (
                    <div 
                        key={index} 
                        className={classnames(Style.todo, {
                            [Style.todoDivider]: !(arr.length === index + 1)
                        })}
                    >
                        {todo.title}
                        <div  className={Style.todoIconWrapper}>
                            <div className={Style.todoCount}>{todo.count}</div>
                            <button onClick={() =>kurang(index)} className={Style.todoActionButton}>
                                <img src={minus} alt="Minus"/>
                            </button>
                            <button onClick={() => tambah(index) } className={Style.todoActionButton}>
                                <img src={plus} alt="Plus"/>
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        title : PropTypes.string,
        count: PropTypes.number
    })),
    kurang : PropTypes.func,
    tambah : PropTypes.func
}
export default Todos;