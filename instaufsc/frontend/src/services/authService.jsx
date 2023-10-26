import { api, requestConfig } from '../utils/config'

const register = async data => {
  const config = requestConfig('POST', data)

  try {
    const res = await fetch(api + '/users/register', config)
      .then(res => res.json())
      .catch(err => err)

    if (res._id) {
      localStorage.setItem('user', JSON.stringify(res))
    }

    return res
  } catch (error) {
    console.error(error)
  }
}

const authService = {
  register
}

export default authService
