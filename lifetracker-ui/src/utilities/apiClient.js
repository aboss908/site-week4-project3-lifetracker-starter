const apiBaseURL = "http://localhost:3001"
const apiLogInURL = "/auth/login"
const apiRegisterURL = "/auth/register"

class ApiError extends Error {
    constructor(message, details) {
      super(message)
      this.name = 'API' + this.name
      this.details = details
    }
}

const headers = ({
    'Content-Type': 'application/json',
    'authorization': localStorage.getItem('lifetracker_token')
})

const request = async (method, url, body = null) => {

    const options = body ? { method, headers, body: JSON.stringify(body) } : { method, headers }
  
    let response = null

    try {
      response = await fetch(url, options)
    }
    catch(e) {
      throw new ApiError('API cannot be reached', e.message)
    }
  
    const data = await response.json()

    if (response.ok) {
      return data
    }
    else {
      if (data.error)
        throw new ApiError(data.error.message, data.error.details)
    }
}

const getExercises = async function() {
  const response = await request('GET', `${apiBaseURL}/tracker/exercise`)
  return response
}

const getNutrition = async function() {
  const response = await request('GET', `${apiBaseURL}/tracker/nutrition`)
  return response
}

const getSleep = async function() {
  const response = await request('GET', `${apiBaseURL}/tracker/sleep`)
  return response
}

const fixToken = function (token) {
  const fixedToken = "Bearer " + token
  console.log(fixedToken)
  return fixedToken
}

export {
    ApiError,
    request,
    apiBaseURL,
    apiLogInURL,
    apiRegisterURL,
    fixToken,
    getExercises,
    getNutrition,
    getSleep
}