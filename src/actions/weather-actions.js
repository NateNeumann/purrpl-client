import axios from 'axios'

// const ROOT_URL = 'https://project-api-black-mirror.herokuapp.com/api'
const ROOT_URL = 'http://localhost:9090/api'

export default function getWeather(lat, long) {
  return new Promise((resolve, reject) => {
    axios.get(`${ROOT_URL}/weather/${lat}&${long}`).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}
