import { NavLink } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <h1>Tênis</h1>
      <NavLink to={'/about'}>Sobre</NavLink>
    </div>
  )
}

export default Product
