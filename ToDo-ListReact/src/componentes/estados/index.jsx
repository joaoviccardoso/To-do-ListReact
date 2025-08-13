import './estados.css'
import Botao from '../button'

function Estados(){
    return(
        <div className='container-btn-estados'>
            <Botao
                className="btn-estados"
                onClick=""
                text="Pendente"
            />
            <Botao
                className="btn-estados"
                onClick=""
                text="Concluída"
            />
            <Botao
                className="btn-estados"
                onClick=""
                text="All"
            />
        </div>
    )
}

export default Estados