import { useEffect, useRef, useState } from 'react'


export default function NewMessageForm({ onSend }){
const [text, setText] = useState('')
const inputRef = useRef(null)


useEffect(() => { inputRef.current?.focus() }, [])


function handleSubmit(e){
e.preventDefault()
const trimmed = text.trim()
if(!trimmed) return
onSend(trimmed)
setText('')
}


return (
<form onSubmit={handleSubmit} className="row space" aria-label="Enviar mensaje">
<input
ref={inputRef}
className="input"
placeholder="Escribí un mensaje"
aria-label="Escribí un mensaje"
value={text}
onChange={e=>setText(e.target.value)}
/>
<button className="icon-btn" aria-label="Enviar">📨</button>
</form>
)
}