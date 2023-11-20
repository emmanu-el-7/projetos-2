import './Photo.css'

import { uploads } from '../../utils/config'

import Message from '../../components/Message'
import PhotoItem from '../../components/PhotoItem'
import { NavLink } from 'react-router-dom'
import LikeContainer from '../../components/LikeContainer'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPhoto } from '../../slices/photoSlice'

const Photo = () => {
  const { id } = useParams()

  const dispatch = useDispatch()

  const { user } = useSelector(state => state.auth)
  const { photo, loading, error, message } = useSelector(state => state.photo)

  //carregamento dos dados da foto
  useEffect(() => {
    dispatch(getPhoto(id))
  }, [dispatch, id])

  const handleLike = () => {
    dispatch(like(photo._id))
  }

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div id='photo'>
      <PhotoItem photo={photo} />
      <LikeContainer photo={photo} user={user} handlelike={handleLike} />
    </div>
  )
}

export default Photo
