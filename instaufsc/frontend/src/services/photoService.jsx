import { api, requestConfig } from "../utils/config";

//publicação de fotos
const publishPhoto = async (data, token) => {
  const config = requestConfig("POST", data, token, true); //true porque há imagem envolvida

  try {
    const res = await fetch(api + "/photos", config) //acessa a API
      .then((res) => res.json()) //transforma os dados recebidos para JSON
      .catch((err) => err); //pega eventual erro da requisição

    return res;
  } catch (error) {
    console.log(error); //loga os erros, caso ocorram
  }
};

//resgate de fotos de usuário
const getUserPhotos = async (id, token) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(api + "/photos/user/" + id, config) //acessa a API
      .then((res) => res.json()) //transforma os dados recebidos para JSON
      .catch((err) => err); //pega eventual erro da requisição

    return res;
  } catch (error) {
    console.log(error); //loga os erros, caso ocorram
  }
};

//exclusão de foto
const deletePhoto = async (id, token) => {
  const config = requestConfig("DELETE", null, token);

  try {
    const res = await fetch(api + "/photos/" + id, config) //acessa a API
      .then((res) => res.json()) //transforma os dados recebidos para JSON
      .catch((err) => err); //pega eventual erro da requisição

    return res;
  } catch (error) {
    console.log(error); //loga os erros, caso ocorram
  }
};

//atualização de foto
const updatePhoto = async (data, id, token) => {
  const config = requestConfig("PATCH", data, token);

  try {
    const res = await fetch(api + "/photos/" + id, config) //acessa a API
      .then((res) => res.json()) //transforma os dados recebidos para JSON
      .catch((err) => err); //pega eventual erro da requisição

    return res;
  } catch (error) {
    console.log(error); //loga os erros, caso ocorram
  }
};

//retornar foto por id
const getPhoto = async (id, token) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(api + "/photos/" + id, config) //acessa a API
      .then((res) => res.json()) //transforma os dados recebidos para JSON
      .catch((err) => err); //pega eventual erro da requisição

    return res;
  } catch (error) {
    console.log(error); //loga os erros, caso ocorram
  }
};

const photoService = {
  publishPhoto,
  getUserPhotos,
  deletePhoto,
  updatePhoto,
  getPhoto,
};

export default photoService;
