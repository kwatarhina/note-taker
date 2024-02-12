import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store/store.ts"
import {NextUIProvider} from '@nextui-org/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <NextUIProvider> 
      <Provider store={store} >
        <App />
      </Provider>
     </NextUIProvider> 
    </BrowserRouter>
  </React.StrictMode>
  ,
)
