import React from 'react'

export interface Props {
    
}
 
export interface State {
    firstName: string;
    lastName: string;
    age: number;
    username: string;
    password: string;
    passwordMatch: string;
    showErrorMessage: boolean;
}
 
class SignUp extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { 
            firstName: '',
            lastName: '',
            age: 0,
            username: '',
            password: '',
            passwordMatch: '',
            showErrorMessage: false

        };
    }
    render() { 
        return ( 
        <div>
            <h1>hello</h1>
        </div> );
    }
}
 
export default SignUp;