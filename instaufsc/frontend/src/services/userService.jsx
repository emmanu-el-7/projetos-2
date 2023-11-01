import { api, requestConfig } from '../utils/config'

//Recuperar os detalhes do usuário logado
const profile = async (data, token) => {
  const config = requestConfig('GET', data, token)

  try {
    const res = await fetch(api + '/users/profile', config) //acessa a API
      .then(res => res.json()) //transforma os dados recebidos para JSON
      .catch(err => err) //pega eventual erros da requisição

    return res //retorna a resposta
  } catch (error) {
    console.log(error) //loga os erros, se ocorrerem
  }
}

const userService = {
  profile
}

export default userService
