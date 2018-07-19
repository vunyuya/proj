require('./style.css');
import React      from 'react';
import ReactDOM   from 'react-dom';
import App        from './components/App.jsx';
const favicon = require('./assets/favicon.png');
let link = document.createElement('link');
link.type = 'image/png';
link.rel = 'shortcut icon';
link.href = favicon;
document.head.appendChild(link);

let title = document.createElement('h1');
title.innerText = 'Hello Wepack';
document.body.appendChild(title);


ReactDOM.render(<App />);