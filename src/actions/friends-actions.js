import axios from 'axios'

// const ROOT_URL = 'https://project-api-black-mirror.herokuapp.com/api'
const ROOT_URL = 'http://localhost:9090/api'

export function fetchFriends(id) {
  console.log(id)
  axios.get(`${ROOT_URL}/friends/${id}`).then((response) => {
    console.log(response.data)
    return response.data
  }).catch((error) => {
    console.log(error)
  })
}

export function addFriend(id, username) {
  axios.post(`${ROOT_URL}/friends/${id}`, username).then((response) => {
    return response.data
  }).catch((error) => {
    console.log(error)
  })
}

export function deleteFriend(id, username) {
  axios.delete(`${ROOT_URL}/friends/${id}`, username).then((response) => {
    return response.data
  }).catch((error) => {
    console.log(error)
  })
}

export function sendAction(id, username, action) {
  axios.delete(`${ROOT_URL}/friends/${id}`, { username, action }).then((response) => {
    return response.data
  }).catch((error) => {
    console.log(error)
  })
}
