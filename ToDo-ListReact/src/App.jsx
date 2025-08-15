import './App.css'
import Botao from './componentes/button'
import Input from './componentes/input'
import Estados from './componentes/estados'
import Tarefas from './componentes/tarefas'
import { useState } from 'react'

function App() {
  let [tarefas, setTarefas] = useState(['Fazer lição', 'Limpar Casa', 'Fazer o Almoço'])
  const [editarTarefa, setEditarTareda] = useState(null)
  const [inputTarefa, setInputTarefa] = useState('');

  function mostrarValorInput(){
    if(editarTarefa !== null){
      const atualizar = tarefas.map((tarefa, index) => {
        return index === editarTarefa ? inputTarefa : tarefa
      })
      setTarefas(atualizar)
      console.log(atualizar)
      console.log(tarefas)
    } else{
      setTarefas([...tarefas, inputTarefa])
      console.log(tarefas)
    }
    
  }

  function excluirTarefa(indexParaRemover){
    setTarefas(tarefas.filter((_, index) => index !== indexParaRemover));
  }

  function adicionarTarefaNoInput(indexParaEditar){
      setEditarTareda(indexParaEditar)
      setInputTarefa(tarefas[indexParaEditar])
  }

  return (
   <div>
      <h1>To-Do List</h1>
      <div className="container-cadastrar-tarefa">
        <Input
          onChange={(e) => setInputTarefa(e.target.value)}
          type="text"
          className="input-tarefa"
          value={inputTarefa}
        />
        <Botao
          className="btn-add"
          onClick={() => mostrarValorInput()}
          text="Add Tarefa"
        />
      </div>
      
      <section>
        <div className="container-estados">
          <Estados></Estados>
        </div>

        <div className="container-tarefas">
          <Tarefas
            tarefas={tarefas}
            excluirTarefa={excluirTarefa}
            editarTarefa={adicionarTarefaNoInput}
          />
        </div>
      </section>
      
   </div>
  )
}

export default App
