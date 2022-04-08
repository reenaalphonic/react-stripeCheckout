import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import preval from 'preval.macro';
import Pay from './Pay';

const buildTimestamp = preval`module.exports = new Date().toLocaleString();`
console.log(buildTimestamp)
ReactDOM.render(
   <>
   <div>The page is last updated as of {buildTimestamp}</div>
    <Pay />
    </>,
  document.getElementById('root')
);

