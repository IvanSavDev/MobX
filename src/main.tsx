import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { todo } from './store/todo';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App todo={todo} />
  </React.StrictMode>,
)
