import { api, requestConfig } from '../utils/config'

//publicação de fotos
const publishPhoto = async (data, token) => {
  const config = requestConfig('POST', data, token, true) //true porque há imagem envolvida

  try {
    const res = await fetch(api + '/photos', config)
      .then(res => res.json())
      .catch(err => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

//resgate de fotos de usuário
const getUserPhotos = async (id, token) => {
  const config = requestConfig('GET', null, token)

  try {
    const res = await fetch(api + '/photos/user/' + id, config)
      .then(res => res.json())
      .catch(err => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

//exclusão de foto
const deletePhoto = async (id, token) => {
  const config = requestConfig('DELETE', null, token)

  try {
    const res = await fetch(api + '/photos/' + id, config)
      .then(res => res.json())
      .catch(err => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

//atualização de foto
const updatePhoto = async (data, id, token) => {
  const config = requestConfig('PATCH', data, token)

  try {
    const res = await fetch(api + '/photos/' + id, config)
      .then(res => res.json())
      .catch(err => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

//retornar foto por id
const getPhoto = async (id, token) => {
  const config = requestConfig('GET', null, token)

  try {
    const res = await fetch(api + '/photos/' + id, config)
      .then(res => res.json())
      .catch(err => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

const photoService = {
  publishPhoto,
  getUserPhotos,
  deletePhoto,
  updatePhoto,
  getPhoto
}

export default photoService
