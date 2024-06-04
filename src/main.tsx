import React from 'react'
import ReactDOM from 'react-dom/client'
import { UserTicketView } from './user-views/UserTicketView'
import WebApp from '@twa-dev/sdk'
import './index.css'

WebApp.ready();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserTicketView />
  </React.StrictMode>,
)
