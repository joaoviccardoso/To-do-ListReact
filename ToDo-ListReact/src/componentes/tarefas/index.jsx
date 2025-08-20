import './tarefas.css'
import Input from '../input'
import Botao from '../button'

function Tarefas({tarefas, excluirTarefa, editarTarefa, tarefaConcluida}){
    return (     
        <div>
            {tarefas.map((tarefa, index) => {
            return(<div key={tarefa.id} className="tarefas" style={{background: tarefa.concluida ? "#00ca00ff" : "none"}}>
                    <Input
                      type="checkbox"
                      className="input-concluido"
                      onChange={() => tarefaConcluida(index)}
                    />
                    <p>{tarefa.titulo}</p>

                    <div className='container-btnsEditarExcluir'>
                      <Botao
                        onClick={() => excluirTarefa(index)}
                        className="btn-excluir"
                        text="Excluir"
                      />
                      <Botao
                        onClick={() => editarTarefa(index)}
                        className="btn-editar"
                        text='Editar'
                      />
                    </div>
                    
                  </div>
            )
          })} 
        </div>
    )
}

export default Tarefas