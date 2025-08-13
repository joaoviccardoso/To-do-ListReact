import './App.css'
import Botao from './componentes/button'
import Input from './componentes/input'
import Estados from './componentes/estados'
import { useState } from 'react'

function App() {
  const tarefas = ["Fazer lição", "Arrumar a Mochila", "Finalizar o livro"]
  const [inputTarefa, setInputTarefa] = useState('');

  function mostrarValorInput(){
    console.log(inputTarefa)
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
          {tarefas.map((tarefa, index) => {
            return(<div key={index} className="tarefas">
                    <Input
                      type="checkbox"
                      className="input-concluido"
                    />
                    <p>{tarefa}</p>
                    <Botao
                      onClick=""
                      className="btn-excluir"
                      text="Excluir"
                    />
                  </div>
            )
          })}
        </div>
      </section>
      
   </div>
  )
}

export default App
