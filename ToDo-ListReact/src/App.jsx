import './App.css'
import Botao from './componentes/button'
import Input from './componentes/input'
import Estados from './componentes/estados'
import Tarefas from './componentes/tarefas'
import { useState } from 'react'

function App() {
  let [tarefas, setTarefas] = useState(['Fazer lição', 'Limpar Casa', 'Fazer o Almoço'])
  const [inputTarefa, setInputTarefa] = useState('');

  function mostrarValorInput(){
    console.log(inputTarefa)
    setTarefas([...tarefas, inputTarefa])
    console.log(tarefas)
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
          />
        </div>
      </section>
      
   </div>
  )
}

export default App
