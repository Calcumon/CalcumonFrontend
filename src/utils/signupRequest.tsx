export interface IRequestBody { 
    email?: string;
    username: string;
    password: string;
}

const signUpRequest = (body:IRequestBody) => {

    return fetch(`${process.env.REACT_APP_BACKEND}/user/${body.username}`, {
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body)
    })

}

export default signUpRequest
