import { NavLink } from 'react-router-dom'
import { useGetData } from '../hooks/useGetData'

import Logo from '../images/super-shoes.png'
import RightArrow from '../images/216151_right_chevron_icon.png'

import './Home.css'

const Home = () => {
  const url = 'http://localhost:3000/products'

  const { data: items, loading, error } = useGetData(url)

  console.log(items)

  const handleLeftClick = e => {
    e.prevent.default()
  }

  const handleRightClick = e => {
    e.prevent.default()
  }

  return (
    <div>
      <h1>Sapataria</h1>
      <NavLink to='/products'>Detalhes</NavLink>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} alt='Super Shoes Logo' />
        </div>
        <div className='carrousel'>
          {items &&
            items.map(item => (
              <div className='item' key={item.id}>
                <div className='image'>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className='info'>
                  <span className='name'>{item.name}</span>
                  <span className='oldPrice'>R$ {item.oldPrice}</span>
                  <span className='price'>R$ {item.price}</span>
                </div>
                <p className='detalhes'>
                  <NavLink to={`/products/${item.id}`}>Detalhes</NavLink>
                </p>
              </div>
            ))}
          <div className='item'>
            <div className='image'>
              <img
                src='https://imgcentauro-a.akamaihd.net/230x230/9431371.jpg'
                alt='Tênis'
              />
            </div>
            <div className='info'>
              <span className='name'>Tênis</span>
              <span className='oldPrice'>R$ 250.00</span>
              <span className='price'>R$ 150.00</span>
            </div>
            <div className='buttons'>
              <button className='left_button'>
                <img src={RightArrow} alt='Scroll Left' />
              </button>
              <button onClick={handleRightClick}>
                <img src={RightArrow} alt='Scroll Right' />
              </button>
            </div>
          </div>
          <p className='detalhes'>
            <NavLink to='/products/94313731'>Detalhes</NavLink>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
