import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import HooksApp from './HooksApp';
//import CounterApp from './01-useState/CounterApp';
//import{CounterWithCustomHook} from'./01-useState/CounterWithCustomHook';
//import FormWithCustomHook  from './02-useEffect/FormWithCustomHook';
//import MultipleCustomHooks from './03-examples/MultipleCustomHooks';
//import { FocusScreen } from './04.useRef/FocusScreen';
//import { Memorize } from './05-memos/Memorize';
import CallbackHook from './05-memos/CallbackHook';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CallbackHook/>
  </React.StrictMode>,
)
