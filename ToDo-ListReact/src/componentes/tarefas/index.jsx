import './tarefas.css'
import Input from '../input'
import Botao from '../button'

function Tarefas({tarefas, excluirTarefa}){

    return (
        <div>
            {tarefas.map((tarefa, index) => {
            return(<div key={index} className="tarefas">
                    <Input
                      type="checkbox"
                      className="input-concluido"
                    />
                    <p>{tarefa}</p>
                    <Botao
                      onClick={() => excluirTarefa(index)}
                      className="btn-excluir"
                      text="Excluir"
                    />
                  </div>
            )
          })} 
        </div>
    )
}

export default Tarefas