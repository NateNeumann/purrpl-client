import axios from 'axios'

// const ROOT_URL = 'https://project-api-black-mirror.herokuapp.com/'
const ROOT_URL = 'http://localhost:9090/api'

export function fetchReminders(id) { /* axios get */
  return new Promise((resolve, reject) => {
    axios.get(`${ROOT_URL}/reminders/${id}`).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
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
  return new Promise((resolve, reject) => {
    axios.post(`${ROOT_URL}/reminders`, fields).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

// export function updateReminder(id, fields) { /* axios put */
//   return new Promise((resolve, reject) => {
//     axios.put(`${ROOT_URL}/reminders/${id}`, fields).then((response) => {
//       resolve(response.data)
//     }).catch((error) => {
//       reject(error)
//     })
//   })
// }

export function updateActive(id, active) {
  return new Promise((resolve, reject) => {
    axios.put(`${ROOT_URL}/reminders/active/${id}`, { active }).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function updateTimes(id, times) {
  return new Promise((resolve, reject) => {
    axios.put(`${ROOT_URL}/reminders/times/${id}`, { times }).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function fetchReminder(id, type) { /* axios get */
  return new Promise((resolve, reject) => {
    axios.get(`${ROOT_URL}/reminder/${id}&${type}`).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}
