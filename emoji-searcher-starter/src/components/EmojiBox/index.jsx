import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Style from './EmojiBox.module.css'
import classnames from 'classnames'

const EmojiBox = ({ title, symbol }) => {
    const [selected, setSelected] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setSelected(false), 600);

        return () => clearTimeout(timer);
    }, [selected])
    return(
        <div 
            className={classnames(Style.emojiBox, {
                [Style.selected] : selected
            })}
            onClick={ () => {
                navigator.clipboard.writeText(symbol);
                setSelected(true);
            }}    
        >
            <p 
                className={Style.emoji}
                dangerouslySetInnerHTML={{
                    __html: `&#${symbol.codePointAt(0)}`
                }}
            />

            <p className={Style.emojiText}>
                {selected ? 'Copied!' : title}
            </p>
        </div>
    )
}

EmojiBox.propTypes = {
    title: PropTypes.string,
    symbol: PropTypes.string
}

export default EmojiBox