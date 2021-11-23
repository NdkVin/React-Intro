import Style from './SearchInput.module.css';
import PropsTypes from 'prop-types';


const SearchInput = ({ onSubmit, onChange, value }) => {
    return(
        <form onSubmit={onSubmit} className={Style.form}>
            <input
                onChange={onChange}
                value={value}
                type="input"
                className={Style.input}
                placeholder="List" 
            />
            <button  type="submit" className={Style.addButton} >Add</button>
        </form>
    )
}

SearchInput.propsTypes = {
    onSubmit: PropsTypes.func,
    onChange: PropsTypes.func,
    value: PropsTypes.string
}

export default SearchInput