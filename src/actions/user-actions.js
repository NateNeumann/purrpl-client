import axios from 'axios'

// const ROOT_URL = 'https://project-api-black-mirror.herokuapp.com/api'
const ROOT_URL = 'http://localhost:9090/api'

export default function fetchUsers(searchTerm) {
  return new Promise((resolve, reject) => {
    axios.get(`${ROOT_URL}/users`, { search: searchTerm }).then((response) => {
      console.log(response.data)
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}
