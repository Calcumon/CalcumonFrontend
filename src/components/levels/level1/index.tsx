import * as React from 'react';
import { Component } from 'react';
import Phaser, { Scene, Game, Cameras, GameObjects } from 'phaser'
import { IonPhaser } from '@ion-phaser-ce/react'

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
      renderer: Phaser.AUTO,
      scene: {
        init: function() {
        },
        create: function() {
        },
        update: function() {
        }
      }
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
            .then((response)=>response.json())
              .then((data)=>{
                console.log("Hello", data)
              })
              .catch((err)=>{
                console.log(err)
              })
        }

    render() {
        return ( <>
            <h1>hi</h1>
            <button onClick={()=>this.mathCall()}></button>
            <IonPhaser game={this.state.game} initialize={this.state.initialize} />
        </> );
    }
}
 
export default LevelOne;