import './Navbar.css'
import { BiMessageSquareDetail, BiCog } from 'react-icons/bi'


export default function Navbar(){
return (
<header className="navbar card" role="banner">
<div className="row space">
<BiMessageSquareDetail aria-hidden="true" size={24} />
<strong aria-label="Nombre de la app">WhatsApp UTN</strong>
<div style={{marginLeft:'auto'}}/>
<button className="icon-btn" aria-label="Ajustes"><BiCog size={20} /></button>
</div>
</header>
)
}