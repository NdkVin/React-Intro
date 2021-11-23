import PropTypes from 'prop-types'
import Style from './Container.module.css'

const Container = ({ children }) => {
    return(
        <section className={Style.container}>
            {children}
        </section>
    )
}

Container.propTypes = {
    children: PropTypes.node
}
export default Container