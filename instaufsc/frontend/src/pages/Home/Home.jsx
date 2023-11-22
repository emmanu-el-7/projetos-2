import './Home.css'

import LikeContainer from '../../components/LikeContainer'
import PhotoItem from '../../components/PhotoItem'
import { NavLink } from 'react-router-dom'

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useResetMessageComponent } from '../../hooks/useResetMessageComponent'

import { getPhotos, like } from '../../slices/photoSlice'

const Home = () => {
  const dispatch = useDispatch()

  const resetMessage = useResetMessageComponent(dispatch)

  const { user } = useSelector(state => state.auth)
  const { photos, loading } = useSelector(state => state.photo)

  //carregamento de todas as fotos
  useEffect(() => {
    dispatch(getPhotos())
  }, [dispatch])

  //atribuição de likes
  const handleLike = photo => {
    dispatch(like(photo._id))

    resetMessage()
  }

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div id='home'>
      {photos &&
        photos.map(photo => (
          <div key={photo._id}>
            <PhotoItem photo={photo} />
            <LikeContainer photo={photo} user={user} handleLike={handleLike} />
            <NavLink className='btn' to={`/photos/${photo._id}`}>
              Ver mais
            </NavLink>
          </div>
        ))}
      {photos && photos.length === 0 && (
        <h2 className='no-photos'>
          Ainda não há fotos publicadas,{' '}
          <NavLink to={`/users/${user._id}`}>clique aqui</NavLink>.
        </h2>
      )}
    </div>
  )
}

export default Home
