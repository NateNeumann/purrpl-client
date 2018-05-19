import axios from 'axios'

// const ROOT_URL = 'https://project-api-black-mirror.herokuapp.com/api'
const ROOT_URL = 'http://localhost:9090/api'

export function fetchUsers() {
  return new Promise((resolve, reject) => {
    axios.get(`${ROOT_URL}/users`).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function fetchSearchedUsers(searchTerm) {
  return new Promise((resolve, reject) => {
    axios.get(`${ROOT_URL}/users/${searchTerm}`).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}
