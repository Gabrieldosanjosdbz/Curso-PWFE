import  Axios  from "axios";

const api = Axios.create({
    baseUrl: 'https://sujeitoprogramador.com/'
})

export default api;