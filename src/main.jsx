import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css'
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import HooksApp from './HooksApp';
//import CounterApp from './01-useState/CounterApp';
//import{CounterWithCustomHook} from'./01-useState/CounterWithCustomHook';
//import FormWithCustomHook  from './02-useEffect/FormWithCustomHook';
//import MultipleCustomHooks from './03-examples/MultipleCustomHooks';
//import { FocusScreen } from './04.useRef/FocusScreen';
//import { Memorize } from './05-memos/Memorize';
//import CallbackHook from './05-memos/CallbackHook';
//import { Padre } from './07-tarea-memo/Padre';
//import'./08-useReducer/intro-reducer';
//import TodoApp from './08-useReducer/TodoApp';
import {MainApp} from './09-use-Context/MainApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainApp/>
  </BrowserRouter>
)
