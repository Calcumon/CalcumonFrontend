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

        };
    }
    render() {
        return ( <div>
            <h1>hi</h1>
        </div> );
    }
}
 
export default LevelOne;