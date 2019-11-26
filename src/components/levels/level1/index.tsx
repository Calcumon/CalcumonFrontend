import * as React from 'react';
import { Component } from 'react';

export interface LevelOneProps {
    
}
 
export interface LevelOneState {
    
}
 
class LevelOne extends React.Component<LevelOneProps, LevelOneState> {
    constructor(props: LevelOneProps) {
        super(props);
        this.state = { 
            
        }
    }   
        mathCall = async () => {
            return fetch("https://calcumon-math-api.herokuapp.com",{
            method: 'GET',
            headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
            }})
            .then((response)=>{
                response.json()
              })
              .then((data)=>{
                
                console.log("Hello", data)
              })
              .catch((err)=>{
                console.log(err)
              })
        }

    render() {
        return ( <div>
            <h1>hi</h1>
            <button onClick={()=>this.mathCall()}></button>
        </div> );
    }
}
 
export default LevelOne;