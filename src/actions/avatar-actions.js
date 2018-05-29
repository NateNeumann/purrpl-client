import axios from 'axios'

const ROOT_URL = 'https://project-api-black-mirror.herokuapp.com/api'

// id is user id
export default function getAvatar(id) {
  return new Promise((resolve, reject) => {
    axios.get(`${ROOT_URL}/avatar/${id}`).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}
