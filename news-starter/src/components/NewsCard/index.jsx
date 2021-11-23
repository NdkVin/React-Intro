import Style from './NewsCard.module.css'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { formatDate } from '../../utils/formatDate'

const NewsCard = ({
    src,
    title,
    publishedAt,
    author,
    sourceName,
    description,
    url,
    notLastChild
}) => {
    return(
        <>
            <div className={classnames(Style.newsCard), {
                [Style.newsCardGap] : notLastChild
            }}>
                <div className={Style.imgContainer}>
                    <img 
                        className={Style.img}
                        src={src}
                        alt={`${title} thumbnail img`} />
                    <p className={Style.imgTitle}>{title}</p>
                </div>

                <div className={Style.newsCardContent}>
                    <p className={Style.newsCardDate}>{formatDate(publishedAt)}</p>

                    <p className={Style.newsCardAutor}>
                        {`${author} || ${sourceName}`}
                    </p>

                    <p className={Style.newsCardDesc}>{description}</p>
                
                    <a className={Style.url} href={url} target="_blank" rel="noreferrer noopener"> Go to website</a>
                </div>
            </div>
        </>
    )
}

NewsCard.propsTypes = {
    src : PropTypes.sting,
    title : PropTypes.sting,
    publishedA: PropTypes.stingt,
    author: PropTypes.sting,
    sourceName: PropTypes.sting,
    description: PropTypes.sting,
    url: PropTypes.sting,
    notLastChild: PropTypes.bool
}

export default NewsCard