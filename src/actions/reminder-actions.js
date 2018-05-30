import axios from 'axios'

const ROOT_URL = 'https://project-api-black-mirror.herokuapp.com/api'
// const ROOT_URL = 'http://localhost:9090/api'

// id is user id
export function fetchReminders(id) { /* axios get */
  return new Promise((resolve, reject) => {
    axios.get(`${ROOT_URL}/reminders/${id}`).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

// id is user id
export function fetchDailyReminders(id) {
  return new Promise((resolve, reject) => {
    axios.get(`${ROOT_URL}/reminders/daily/${id}`).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function createReminder(reminder) { /* axios post */
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

// id is reminder id
export function updateActive(id, active) {
  return new Promise((resolve, reject) => {
    axios.put(`${ROOT_URL}/reminders/active/${id}`, { active }).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

// id is reminder id
export function updateTimes(id, times) {
  return new Promise((resolve, reject) => {
    axios.put(`${ROOT_URL}/reminders/times/${id}`, { times }).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

// id is user id
export function fetchReminder(id, type) { /* axios get */
  return new Promise((resolve, reject) => {
    axios.get(`${ROOT_URL}/reminder/${id}&${type}`).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

// id is user id
export function fetchReminderTime(id, type, date, hour) {
  return new Promise((resolve, reject) => {
    axios.get(`${ROOT_URL}/reminder/date/${id}&${type}&${date}&${hour}`).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}
// id is reminder id
// date must in following format: May 25, 2018
// hour is just an int: 0 - 23
// completion is a boolean value
export function updateCompletion(id, date, hour, completion) {
  return new Promise((resolve, reject) => {
    axios.put(`${ROOT_URL}/reminder/completion/${id}`, { date, hour, completion }).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

// id is user id
export function getRemainders(id, date) {
  return new Promise((resolve, reject) => {
    axios.get(`${ROOT_URL}/reminders/remainders/${id}&${date}`).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}
