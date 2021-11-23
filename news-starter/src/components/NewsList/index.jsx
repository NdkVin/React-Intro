import Style from './NewsList.module.css'

import PropTypes from 'prop-types'
import NewsCard from '../NewsCard'


const NewsList = ({ articles }) => {
    return(
        <div className={Style.NewsList}>
            {articles.map((article, index, arr) => {

                if(!article.urlToImage || !article.author || !article.content) {
                    return null
                }
                return(
                    <div key={index}>
                        <NewsCard 
                            src={article.urlToImage}
                            title={article.titl}
                            publishedAt={article.publishedAt}
                            author={article.author}
                            sourceName={article.source.name}
                            description={article.description}
                            url={article.url}
                            notLastChild={!(arr.length === index+1)}
                        />
                    </div>
                )
            })}
        </div>
    )
}  
NewsList.propType = {
    articles : PropTypes.array
}
export default NewsList