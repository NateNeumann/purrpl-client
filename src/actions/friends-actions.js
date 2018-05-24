import axios from 'axios'

const ROOT_URL = 'https://project-api-black-mirror.herokuapp.com/api'

export function fetchFriends(id) {
  return new Promise((resolve, reject) => {
    axios.get(`${ROOT_URL}/friends/${id}`).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function addFriend(id, username) {
  return new Promise((resolve, reject) => {
    axios.post(`${ROOT_URL}/friends/${id}`, { username }).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function deleteFriend(id, username) {
  return new Promise((resolve, reject) => {
    axios.delete(`${ROOT_URL}/friends/${id}&${username}`).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function sendAction(id, username, action) {
  return new Promise((resolve, reject) => {
    axios.put(`${ROOT_URL}/friends/${id}`, { username, action }).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}
