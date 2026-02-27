// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import App2 from './App2.jsx'
// import './index.css';
// import './index.js';
// import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import store from './Store/Store.js'

createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
  // {/* <StrictMode> */}
  // <BrowserRouter>
    // <App />
    <App2 />
  // </BrowserRouter>
  // {/* </StrictMode>, */}
  // </Provider>
)
