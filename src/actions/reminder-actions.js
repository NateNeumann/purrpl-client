import axios from 'axios'

const ROOT_URL = 'https://project-api-black-mirror.herokuapp.com/'
// const ROOT_URL = 'http://localhost:9090/api'

export function fetchReminders() { /* axios get */
  axios.get(`${ROOT_URL}/reminders`).then((response) => {
    return response.data
  }).catch((error) => {
    console.log(error)
  })
}

export function createReminder(reminder, history) { /* axios post */
  const fields = {
    user: reminder.user,
    type: reminder.type,
    frequency: reminder.frequency,
    times: reminder.times,
    toggle: reminder.toggle,
  }

  axios.post(`${ROOT_URL}/reminders`, fields).then((response) => {
    return true
  }).catch((error) => {
    console.log(error)
    return false
  })
}

export function updateReminder(id, fields) { /* axios put */
  axios.put(`${ROOT_URL}/reminders/${id}`, fields).then((response) => {
    return response.data
  }).catch((error) => {
    console.log(error)
    return false
  })
}

export function fetchReminder(id) { /* axios get */
  axios.get(`${ROOT_URL}/posts/${id}`).then((response) => {
    return response.data
  }).catch((error) => {
    console.log(error)
    return false
  })
}
