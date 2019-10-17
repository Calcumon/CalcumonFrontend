
export interface IRequest {
    path: string;
    method: string;
}

export interface IRequestBody { 
    login: string;
    password: string;
}


const request = (path, method = 'get', body = null) => {

  const token = localStorage.getItem('token')

  return fetch(`${process.env.REACT_APP_BACKEND}${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    },
    data: JSON.stringify(body)
  })
}

export default request