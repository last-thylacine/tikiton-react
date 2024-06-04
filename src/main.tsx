import React from 'react'
import ReactDOM from 'react-dom/client'
import { UserEventView } from './user-views/UserEventView'
import WebApp from '@twa-dev/sdk'
import './index.css'

WebApp.ready();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserEventView />
  </React.StrictMode>,
)
