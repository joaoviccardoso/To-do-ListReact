import './App.css'
import Botao from './componentes/button'
import Input from './componentes/input'
import Estados from './componentes/estados'
import Tarefas from './componentes/tarefas'
import { useState } from 'react'

function App() {
  let [tarefas, setTarefas] = useState([
    { id: 0, titulo:'Fazer lição', concluida: false },
    { id: 1, titulo:'Limpar Casa', concluida: false},
    { id: 2, titulo:'Limpar Casa', concluida: false},
  ])
  const [editarTarefa, setEditarTareda] = useState(null)
  const [inputTarefa, setInputTarefa] = useState('');

  function mostrarValorInput(){
    const novoId = tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 0
    console.log(novoId)

    if(editarTarefa !== null){
      console.log(editarTarefa)
      const atualizar = tarefas.map((tarefa, index) => {
        if (index === editarTarefa) {
          console.log("certo")
          return { ...tarefa, titulo: inputTarefa }
        } 
          return tarefa
        })
      setTarefas(atualizar)
      setEditarTareda(null)
      setInputTarefa('')
    } else{
      setTarefas([...tarefas, {id: novoId, titulo: inputTarefa, concluida: false}])
      console.log(tarefas)
    }
  }

  function excluirTarefa(indexParaRemover){
    setTarefas(tarefas.filter((_, index) => index !== indexParaRemover));
  }

  function tarefaConcluida(indexParaConcluir){
    console.log(indexParaConcluir)
    const novasTarefas = tarefas.map((tarefa) => {
      if (tarefa.id === indexParaConcluir){
        return {...tarefa, concluida: !tarefa.concluida}
      }
      return tarefa
    })
    setTarefas(novasTarefas)
  }

  function adicionarTarefaNoInput(indexParaEditar){
    setEditarTareda(indexParaEditar)
    setInputTarefa(tarefas[indexParaEditar].titulo)
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
            tarefaConcluida={tarefaConcluida}
          />
        </div>
      </section>
      
   </div>
  )
}

export default App
