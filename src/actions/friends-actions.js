import axios from 'axios'

const ROOT_URL = 'https://project-api-black-mirror.herokuapp.com/api'
// const ROOT_URL = 'http://localhost:9090/api'

export function fetchFriends(id) {
  return new Promise((resolve, reject) => {
    axios.get(`${ROOT_URL}/friends/${id}`).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function addFriend(id, username, action) {
  return new Promise((resolve, reject) => {
    axios.put(`${ROOT_URL}/friends/${id}`, { username, action: { action } }).then((response) => {
      if (response.status === 208) {
        resolve(response.status)
      }
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function deleteFriend(id, username, action) {
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

export function acceptFriend(id, friendId) {
  return new Promise((resolve, reject) => {
    axios.put(`${ROOT_URL}/friends/accept/${id}`, { friendId }).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}
