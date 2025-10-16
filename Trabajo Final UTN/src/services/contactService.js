import { contacts as seed } from '../data/contactsData'


export function getAllContacts(){
return Promise.resolve(structuredClone(seed))
}


export function getContactById(id){
const found = seed.find(c => c.id === id)
return Promise.resolve(found ? structuredClone(found) : null)
}