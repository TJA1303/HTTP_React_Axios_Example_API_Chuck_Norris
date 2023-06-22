import APIRequest from '../utils/config/axios.config';


export function getRandomfetchJoke() {
    return APIRequest.get('/jokes/random', {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        }
    }); // Nos da la respuesta de https://randomuser.me/api/ 
}