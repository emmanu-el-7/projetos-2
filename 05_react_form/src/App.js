import './App.css'
import Form from './Components/Form'

function App () {
  return (
    <div>
      <h1>Meu formulário</h1>
      <Form user={{ name: 'Zé Ninguém', email: 'ze@ufsc.br' }} />
      <Form user={{ name: 'Juquinha', email: 'juquinha@ufsc.br' }} />
    </div>
  )
}

export default App
