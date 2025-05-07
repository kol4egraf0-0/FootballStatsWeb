import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Outlet /> 
      </div>
    </div>
  )
}

export default App