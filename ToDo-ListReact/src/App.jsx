import './App.css'
import Botao from './componentes/button'
import Input from './componentes/input'
import Estados from './componentes/estados'

function App() {
  const tarefas = ["Fazer lição", "Arrumar a Mochila", "Finalizar o livro"]

  return (
   <div>
      <h1>To-Do List</h1>
      <div className="container-cadastrar-tarefa">
        <Input
          type="text"
          className="input-tarefa"
        />
        <Botao
          className="btn-add"
          onClick=""
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
                    <p>{tarefa}</p>
                  </div>
            )
          })}
        </div>
      </section>
      
   </div>
  )
}

export default App
