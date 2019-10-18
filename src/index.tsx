import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App'
/* Make the store available to all container 
components in the application without passing it explicitly */

/* 
Create a root component that receives the store via props
and wraps the App component with Provider, giving props to containers
*/

// Generate the store
// const store = configureStore();
// store.dispatch(getAllCharacters());

// Render the App
ReactDOM.render(<App />, document.getElementById(
  'root'
) as HTMLElement);