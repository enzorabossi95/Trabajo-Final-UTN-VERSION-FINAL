import { Routes, Route, Navigate } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ChatScreen from './Screens/ChatScreen/ChatScreen'


export default function App(){
return (
<Routes>
<Route path="/" element={<HomeScreen />} />
<Route path="/chat" element={<ChatScreen />} />
<Route path="*" element={<Navigate to="/" replace />} />
</Routes>
)
}
