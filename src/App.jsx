
import './App.css'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import Footer from './components/layout/Footer'
import Register from './components/cards/Register'
import Login from './components/cards/Login'
import Review from './components/cards/Review'
import Cart from './pages/Cart'

function App() {


  return (
    <>
      <Navbar />
      {/*<Home />
            <Register />
      <Login />
      <Review />*/}
      <Cart />
      <Footer />

    </>
  )
}

export default App
