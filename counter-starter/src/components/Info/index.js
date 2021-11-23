import Style from './Info.module.css';
import PropTypes from 'prop-types';

const Info = ({todoLength,getTotal,onDelete}) => {
    return(
        <div className={Style.info}>
            <div className={Style.infoTotal}>
                {`Total List : ${todoLength}`}
            </div>

            <div className={Style.infoTotal}>
                {`Total Count : ${getTotal}`}
            </div>

            <button onClick={onDelete} className={Style.deleteAllButton}> 
                Delete All
            </button>
        </div>
    )
}

Info.propTypes = {
    todoLength: PropTypes.number,
    getTotal: PropTypes.number,
    onDelete: PropTypes.func
}

export default Info;