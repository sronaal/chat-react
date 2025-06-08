import axios from "axios"
import { URLBACKEND } from "../libs/utils"
const serverApi = URLBACKEND


export const obtenerMensajes = () => {

    return axios.get(`${serverApi}mensajes`)
}

