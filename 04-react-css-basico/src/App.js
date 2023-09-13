import './App.css'
import CustomComponent from './components/CustomComponent'
import MyComponentTest from './components/MyComponentTest'

function App () {
  const bTest = false

  return (
    <div className='App'>
      <h1>Título Incluído no App.js.</h1>
      <MyComponentTest />
      <p>Parágrafo do App.js</p>
      <p style={{ color: '#EA5F08', background: '#06F1E2', padding: '50px' }}>
        Parágrafo estilizado inline
      </p>
      <p style={{ color: '#990606', background: '#99068a', padding: '50px' }}>
        Parágrafo estilizado inline
      </p>
      <p style={{ color: '#106359', background: '#e54309', padding: '50px' }}>
        Parágrafo estilizado inline
      </p>
      <p
        style={
          bTest
            ? { color: '#D205f7', background: 'yellow' }
            : { color: '#5e0217', background: '#bb9a86' }
        }
      >
        Novo Parágrafo do App.js, desta vez com CSS Inline Dinâmico
      </p>
      <p
        style={
          !bTest
            ? { color: '#D205f7', background: 'yellow' }
            : { color: '#5e0217', background: '#bb9a86' }
        }
      >
        Novo Parágrafo do App.js, desta vez com CSS Inline Dinâmico
      </p>
      <CustomComponent />
    </div>
  )
}

export default App
