import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'


export default function HomeScreen(){
return (
<div className="container">
<Navbar />
<div className="app-grid">
<Sidebar />
<div className="card hidden-mobile" aria-label="Vista vacía">
<div className="space">
<h2>Seleccioná un chat</h2>
<p>Usá la lista de la izquierda para abrir una conversación.</p>
</div>
</div>
</div>
</div>
)
}