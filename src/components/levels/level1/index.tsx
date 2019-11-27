import * as React from 'react';
import { Component } from 'react';
import Phaser, { Game, Cameras } from 'phaser'
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
                width: 600,
                height: 600,
                type: Phaser.AUTO,
                backgroundColor: 0xdda0dd,
                scene: {
                    init: function() {
                      // Cameras.Controls.FixedKeyControl
                      // .main.setBackgroundColor('#24252A')
                    },
                    create: function() {
                    // this.helloWorld = this.add.text(
                    //     this.cameras.main.centerX, 
                    //     this.cameras.main.centerY, 
                    //     "Hello World", { 
                    //     font: "40px Arial", 
                    //     fill: "#ffffff" 
                    //     }
                    // );
                    // this.helloWorld.setOrigin(0.5);
                    },
                    update: function() {
                    // this.helloWorld.angle += 1;
                    }
                }
            }
        }
        }
        // function preload() {
        //   this.
        // }
        // function create() {
        //   gameState.codey = this.add.sprite(30, 50, 'codey')
        //   gameState.cursors = this.input.keyboard.createCursorKeys()
        //   this.add.text(200,30,'apple')
        // }
        // function update() {
        //   if (gameState.cursors.down.isDown) {
        //     gameState.codey.y += 1;
        //   }
        // }
        // const config = {
        //   width: 400,
        //   height: 600,
        //   backgroundColor: 0xdda0dd,
        //   scene: {
        //     preload,
        //     create,
        //     update
        //   }
        // }
        // const game = new Phaser.Game(config)

        
  
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
        const { initialize, game } = this.state
        console.log(game,initialize)
        return ( <>
            <h1>hi</h1>
            <button onClick={()=>this.mathCall()}></button>
            <IonPhaser game={this.state.game} initialize={this.state.initialize} />
        </> );
    }
}
 
export default LevelOne;