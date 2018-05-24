import axios from 'axios'

// const ROOT_URL = 'http://localhost:9090/api'
const ROOT_URL = 'http://localhost:9090/api'

export default function getUser() {
  return new Promise((resolve, reject) => {
    axios.get(`${ROOT_URL}/randomUser`).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}
