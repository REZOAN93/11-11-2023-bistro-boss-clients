import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Components/Shared/Header/Header'
import Footer from './Components/Shared/Footer/Footer'

function App() {


  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
