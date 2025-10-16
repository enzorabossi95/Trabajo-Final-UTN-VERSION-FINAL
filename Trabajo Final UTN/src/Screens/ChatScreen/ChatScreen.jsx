import './chatScreen.css'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ChatHeader from '../../Components/ChatHeader/ChatHeader'
import MessagesList from '../../Components/MessagesList/MessagesList'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
import { getContactById } from '../../services/contactService'


export default function ChatScreen(){
const [params, setParams] = useSearchParams()
const cid = params.get('cid')
const navigate = useNavigate()
const [contact, setContact] = useState(null)


useEffect(() => {
if(!cid){ navigate('/') }
else { getContactById(cid).then(setContact) }
}, [cid])


const messages = useMemo(() => contact?.messages ?? [], [contact])


function handleSend(text){
// estado local: optimista
const now = new Date()
const at = now.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})
setContact(prev => ({
...prev,
messages:[...prev.messages, {id:crypto.randomUUID(), from:'me', text, at}]
}))
}


return (
<div className="container">
<Navbar />
<div className="app-grid">
<Sidebar />
<main className="chat card" aria-label="Conversación">
<ChatHeader />
<section className="chat-body scroll">
{contact ? (
<MessagesList messages={messages} />
) : (
<div className="space"><p>Cargando chat...</p></div>
)}
</section>
<footer className="chat-footer">
<NewMessageForm onSend={handleSend} />
</footer>
</main>
</div>
</div>
)
}