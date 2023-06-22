import axios from 'axios';

// Default config for AXIOS
export default axios.create(
    {
        baseURL: 'https://api.chucknorris.io', //A donde vamos a hacer la petición
        responseType: 'json', //Tipo de respuesta
        timeout: 6000 //Para que las peticiones fallen si llegan a pasar más de 6 segundos
    }
)