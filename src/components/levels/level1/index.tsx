import * as React from 'react';
import { Component } from 'react';
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'

export interface LevelOneProps {
    
}
 
export interface LevelOneState {
    initialize: boolean;
    game: object
}
 
class LevelOne extends React.Component<LevelOneProps, LevelOneState> {
    constructor(props: LevelOneProps) {
        super(props);
        this.state = { 
            initialize: true,
            game: {
                width: "100%",
                height: "100%",
                type: Phaser.AUTO,
                scene: {}
            }
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
        const { game, initialize } = this.state
        console.log(game,initialize)
        return ( <>
            <h1>hi</h1>
            <button onClick={()=>this.mathCall()}></button>
            <IonPhaser game={this.state.game} initialize={this.state.initialize} />
        </> );
    }
}
 
export default LevelOne;