import './Sidebar.css'
import { Link, useSearchParams } from 'react-router-dom'
import { useContactList } from '../../Context/ContactListContext'


export default function Sidebar(){
const { contacts, loading } = useContactList()
const [params, setParams] = useSearchParams()
const q = params.get('q') || ''


const filtered = contacts.filter(c => c.name.toLowerCase().includes(q.toLowerCase()))


function handleSearch(e){
const value = e.target.value
if(value){ params.set('q', value) } else { params.delete('q') }
setParams(params, { replace:true })
}


return (
<aside className="sidebar card" aria-label="Lista de chats">
<div className="space">
<input
className="input"
placeholder="Buscar contacto..."
aria-label="Buscar contacto"
value={q}
onChange={handleSearch}
/>
</div>


<div className="scroll">
{loading && <p className="space" role="status">Cargando...</p>}
{!loading && filtered.map(c => (
<Link key={c.id} to={`/chat?cid=${c.id}`} className="item" aria-label={`Abrir chat con ${c.name}`}>
<div className="avatar" aria-hidden>{c.avatar}</div>
<div className="meta">
<div className="top">
<span className="name">{c.name}</span>
{c.unread > 0 && <span className="badge" aria-label={`${c.unread} mensajes sin leer`}>{c.unread}</span>}
</div>
<span className="last">{c.lastMessage}</span>
</div>
</Link>
))}
</div>
</aside>
)
}