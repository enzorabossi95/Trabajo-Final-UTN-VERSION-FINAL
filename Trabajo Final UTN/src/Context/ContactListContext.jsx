import { createContext, useContext, useEffect, useState } from 'react'
import { getAllContacts } from '../services/contactService'


const ContactListContext = createContext()


export function ContactListProvider({ children }){
const [contacts, setContacts] = useState([])
const [loading, setLoading] = useState(true)


useEffect(() => {
getAllContacts().then(data => {
setContacts(data)
setLoading(false)
})
}, [])


const value = { contacts, setContacts, loading }
return <ContactListContext.Provider value={value}>{children}</ContactListContext.Provider>
}


export function useContactList(){
return useContext(ContactListContext)
}