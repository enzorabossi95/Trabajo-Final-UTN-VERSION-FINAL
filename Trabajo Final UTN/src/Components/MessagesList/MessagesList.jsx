import './messagesList.css'


export default function MessagesList({ messages = [] }){
return (
<ul className="msgs scroll" aria-live="polite">
{messages.map(m => (
<li key={m.id} className={`msg ${m.from === 'me' ? 'me' : 'them'}`}>
<div className="bubble">
<span>{m.text}</span>
<time className="t">{m.at}</time>
</div>
</li>
))}
</ul>
)
}