
import './App.css'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import Footer from './components/layout/Footer'
import Register from './components/cards/Register'
import Login from './components/cards/Login'

function App() {


  return (
    <>
      <Navbar />
      {/*       <Home /> 
      <Register />*/}
      <Login />
      <Footer />

    </>
  )
}

export default App
