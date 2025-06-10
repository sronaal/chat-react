import axios from "axios";

import { URLBACKEND } from "../libs/utils"

const urlBackend = URLBACKEND


export const obtenerUsuarios = () => {

    return axios.get(`${urlBackend}user`)
}

export const registrarUsuario = (data) => {

    return axios.post(`${urlBackend}user/create`, data)
}