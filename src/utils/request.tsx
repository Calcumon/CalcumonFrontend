
export interface IRequest {
    path: string;
    method: string;
}

export interface IRequestBody { 
    username: string;
    password: string;
}

//request is for user login
const request = (path= '', method = 'get', body = null) => {

  const token = localStorage.getItem('token')

  return fetch(`${process.env.REACT_APP_BACKEND}${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    },
    body: JSON.stringify(body)
  })
}

//#Build a addUserRequest function

export default request