import React from 'react'
import ReactDOM from 'react-dom/client'
import WebApp from '@twa-dev/sdk'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

import { UserEventView } from './user-views/UserEventView'
import { MANIFEST_URL } from './data/constants'
import './index.css'
import "inter-ui/inter.css"
import "inter-ui/inter-variable.css"

WebApp.ready()
WebApp.expand()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<TonConnectUIProvider manifestUrl={MANIFEST_URL}>
			<UserEventView />
        </TonConnectUIProvider>
	</React.StrictMode>,
)
