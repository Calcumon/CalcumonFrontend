import React from 'react';

// TODO: What will be in our LoginInterface?
interface LoginInterface {
    username: string;
    password: string;
}

const Login : React.FunctionComponent<LoginInterface> = ({ username, password }) => {
    return (
        <div>
            <p>{username}</p>
            {password}
        </div>
    )
}

export default Login;