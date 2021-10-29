import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { HookApp } from './HookApp';

// const hooks = require('./components/01-useState')


ReactDOM.render(
    <SimpleForm />,
  document.getElementById('root')
);

