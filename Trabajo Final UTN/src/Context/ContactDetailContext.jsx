import { createContext, useContext, useState } from 'react'


const ContactDetailContext = createContext()


export function ContactDetailProvider({ children }){
const [activeContactId, setActiveContactId] = useState(null)
return (
<ContactDetailContext.Provider value={{ activeContactId, setActiveContactId }}>
{children}
</ContactDetailContext.Provider>
)
}


export function useContactDetail(){
return useContext(ContactDetailContext)
}