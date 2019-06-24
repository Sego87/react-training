import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Avatar from './Avatar';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

const details = {
  name: 'Michele',
  role: 'Basketball Player',
  extra: {
    food: 'Crazy for ice-creams',
    movie: 'Fan of Rocky',
    board_game: 'Descent',
  }
}

ReactDOM.render(<Avatar name={details.name} job={details.role} extra={details.extra} />, document.getElementById('root2'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
