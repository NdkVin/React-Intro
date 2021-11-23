import PropTypes from 'prop-types'

import Style from './Empty.module.css'

const Empty = ({ text }) => {
    return(
        <div className={Style.empty}>
            {text}
        </div>
    )
}

Empty.propTypes = {
    text: PropTypes.string.isRequired
}

export default Empty