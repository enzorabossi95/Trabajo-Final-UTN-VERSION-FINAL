import './ChatHeader.css'
import { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { getContactById } from '../../services/contactService'
import { BiArrowBack } from 'react-icons/bi'


export default function ChatHeader(){
const [params] = useSearchParams()
const cid = params.get('cid')
const [contact, setContact] = useState(null)


useEffect(() => { if(cid) getContactById(cid).then(setContact) }, [cid])


if(!cid) return null
return (
<div className="chat-header card">
<div className="row space">
<Link to="/" className="icon-btn" aria-label="Volver"><BiArrowBack size={22}/></Link>
<div className="avatar" aria-hidden>{contact?.avatar ?? '🙂'}</div>
<div>
<strong>{contact?.name ?? 'Contacto'}</strong>
<div className="sub">en línea</div>
</div>
</div>
</div>
)
}