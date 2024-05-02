import './BotonComponente.css'

function BotonComponente({ nombre }) {
    return (
        <>
       
            <button type="button" className="btn btn-secondary">{nombre}</button>
        </>
    )
}
export default BotonComponente