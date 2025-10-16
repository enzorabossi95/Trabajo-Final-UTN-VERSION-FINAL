import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/global.css'
import './styles/utils.css'
import { ContactListProvider } from './Context/ContactListContext'
import { ContactDetailProvider } from './Context/ContactDetailContext'


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<BrowserRouter>
<ContactListProvider>
<ContactDetailProvider>
<App />
</ContactDetailProvider>
</ContactListProvider>
</BrowserRouter>
</React.StrictMode>
)