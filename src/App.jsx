import './App.css'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Components/Shared/Header/Header'
import Footer from './Components/Shared/Footer/Footer'

function App() {

  const location = useLocation()
  const isLogin = location.pathname.includes('login')
  const isRegister = location.pathname.includes('register')
  return (
    <>
      {isLogin || isRegister || <Header />}
      <Outlet />
      {!isLogin && !isRegister && <Footer />}
    </>
  )
}

export default App
