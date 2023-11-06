import './Profile.css'
import { uploads } from '../../utils/config'
import { Message } from '../../components/Message'
import { Navlink } from 'react-router-dom'
import { BsFillEyeFill, BsPencilFill, BsXLg } from 'react-icons/bs'
import { getUserDetails } from '../../slices/userSlice'
import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const { id } = useParams()

  const dispatch = useDispatch()

  const { user, loading } = useSelector(state => state.user)

  //aqui fazemos uma renomeação para userAuth da variável do Reducer de Autenticação
  //para evitar problemas com o user do Reducer de Usuário
  const { user: userAuth } = useSelector(state => state.auth)

  //carregamento de usuário
  useEffect(() => {
    dispatch(getUserDetails(id))
  }, [dispatch, id]) //será acionado com o dispatch ou com a chegada de um novo id

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div id='profile'>
      <div className='profile-header'>
        {user.profileImage && (
          <img src={`${uploads}/users/${user.profileImage}`} alt={user.name} />
        )}
        <div className='profile-description'>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
