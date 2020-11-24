import axios from 'axios'
const baseURL = 'http://localhost:3001/persons'


const getAll = () =>{
    return axios.get(baseURL)
}

const postAll = (nameObject) =>{
    return axios.post(baseURL, nameObject)
}
const removeAll = (id) =>{
    const request = axios.delete(`http://localhost:3001/persons/${id}`)
    return request.then(response => response.data)
}

export default {getAll, postAll, removeAll}