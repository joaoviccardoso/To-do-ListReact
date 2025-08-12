import './botao.css'

function Botao({className, onClick, text}){
    return(
        <button className={className} onClick={onClick}>
            {text}
        </button>
    )
}

export default Botao