import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import App from './App'
// import { InputValueProvider } from './context/InputValueContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App heading='app heading'/> */}
    {/* <InputValueProvider>
      <App />
    </InputValueProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
