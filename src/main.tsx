import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/App.tsx'
import GlobalStyle from '@/styles/GlobalStyle'

async function enableMocking() {
	if(import.meta.env.PROD) {
		return
	}
	const { worker } = await import('./mocks/worker')
	return worker.start();
}

enableMocking().then(()=> {
	ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
)})