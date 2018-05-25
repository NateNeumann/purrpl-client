import axios from 'axios'

const ROOT_URL = 'https://project-api-black-mirror.herokuapp.com/api'
// const ROOT_URL = 'http://localhost:9090/api'

export function getProgress(id) {
  return new Promise((resolve, reject) => {
    axios.get(`${ROOT_URL}/progress/${id}`).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function getFeelingToday(id) {
  return new Promise((resolve, reject) => {
    axios.get(`${ROOT_URL}/progress/feeling/${id}`).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function getCompletion(id) {
  return new Promise((resolve, reject) => {
    axios.get(`${ROOT_URL}/progress/completion/${id}`).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}
