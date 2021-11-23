import Style from './Error.module.css'

const Error = () => {
    return(
        <div className={Style.container}>
            <p className={Style.error}>Halaman Error, reload untuk memperbaiki</p>
        </div>
    )
}

export default Error