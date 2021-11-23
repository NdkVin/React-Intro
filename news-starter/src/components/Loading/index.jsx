import Style from './Loading.module.css'

const Loading = () => {
    return(
        <div className={Style.container}>
            <div className={Style.loader}></div>
        </div>
    )
}

export default Loading