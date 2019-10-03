import * as React from 'react';
import { connect } from 'react-redux';

import { IAppState } from '../store/Store';
import { listenerCount } from 'cluster';

// Create the containers interface
interface IProps {
    list: IItem[];
  }

class CharacterList extends React.Component<IProps> {
    
    

    public render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type = 'text' name = "todo"></input>
                <input type = 'submit'></input>
            </form>

            {this.props.list &&
            this.props.list.map(item => {
                return (<p>{item}</p>) 
                })
            }

        </div>
    );



const mapStateToProps = (store: IAppState) => {
    return {
        characters: store.listState.list,
        };
    };



export default connect(mapStateToProps)(CharacterList);