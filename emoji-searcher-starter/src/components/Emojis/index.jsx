import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Style from './Emojis.module.css'
import EmojiBox from '../EmojiBox'
import Empty from '../Empty'
import { filterEmojis } from '../../utils/filterEmojis'

const Emojis = ({ emojisData, searchText}) => {
    const [filteredEmojis, setFilteredEmojis] = useState([]);
    useEffect(() => {
        setFilteredEmojis(filterEmojis({
            emojisData,
            searchText
        }))
    }, [emojisData, searchText]);

    if(filteredEmojis.length>0) {
        return(
        <div
            className={Style.emojisGrid}
        >
            {filteredEmojis.map((data, index) => (
                <div key={index}>
                    <EmojiBox 
                        title={data.title}
                        symbol={data.symbol}
                    />
                </div>
            ))}
        </div>
        )
    } else {
        return(
            <Empty text="Emoji yang dicari tidak ditemuakn"/>
        )
    }
}

Emojis.propTypes = {
    emojisData: PropTypes.array,
    searchText: PropTypes.string
}

export default Emojis