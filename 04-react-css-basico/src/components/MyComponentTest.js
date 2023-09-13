import './MyComponentTest.css'

const MyComponentTest = () => {
  return (
    <div>
      <h1>CSS de componente</h1>
      <p>Este parágrafo é do componente</p>
      <p className='my_paragraph'>
        Este parágrafo também é do componente, agora com uma regra mais rígida
      </p>
    </div>
  )
}

export default MyComponentTest
