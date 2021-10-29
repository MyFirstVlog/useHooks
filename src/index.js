import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
import { HookApp } from './HookApp';

// const hooks = require('./components/01-useState')


ReactDOM.render(
    <CounterWithCustomHook />,
  document.getElementById('root')
);

