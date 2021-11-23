import PropTypes from 'prop-types'
import Style from './Input.module.css'

const Input = ({ onChange, value }) => {
    return(
        <input
            className={Style.input}
            onChange={onChange}
            placeholder="Search"
            value={value}
        />
    )
}

Input.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string
}
export default Input