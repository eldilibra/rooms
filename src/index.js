import React from 'react';
import ReactDOM from 'react-dom';
import { fancyRenderer } from './renderer';
import { getRoom } from './fake-backend';

ReactDOM.render(
    <span>{fancyRenderer()}</span>,
    document.getElementById('app')
);

getRoom().then((res) => {
  console.log(res);
});


