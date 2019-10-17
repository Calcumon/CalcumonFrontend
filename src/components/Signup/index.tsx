import React from 'react';
export interface Props {
    signUpAuthenication: Function;
}
 
export interface State {
    username: string;
    email?: string;
    password: string;
    correctPassword: string;
}
 
class Signup extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { 
            username: 'name',
            email: "@gmail.com",
            password: 'password',
            correctPassword: 'Same Password'
        };
    }
    render() { 
        return ( <div>
            <h1>hello</h1>
        </div> );
    }
}
 
export default Signup;