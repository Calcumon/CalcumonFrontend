import * as React from 'react';
import '../App.css';

import CharacterList from '../containers/CharacterList';

const App: React.SFC<{}> = () => {
  return (
    <React.Component>
      <h1>The Force Awakens</h1>
      <CharacterList />
    </React.Component>
  );
};

export default App;