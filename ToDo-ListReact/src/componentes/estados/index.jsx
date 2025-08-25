import './estados.css'
import Botao from '../button'

function Estados({ setFilter }){

    return(
        <div className='container-btn-estados'>
            <Botao
                className="btn-estados"
                onClick={() => setFilter("pendente")}
                text="Pendente"
            />
            <Botao
                className="btn-estados"
                onClick={() => setFilter("concluidas")}
                text="Concluída"
            />
            <Botao
                className="btn-estados"
                onClick={() => setFilter("todos")}
                text="Todos"
            />
        </div>
    )
}

export default Estados