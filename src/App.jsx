import './App.css'
import { Routes, Route } from 'react-router-dom'
import routes from './routes/routes'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


function App() {
  return (
    <>
      <Navbar />
      <main className='flex-grow'>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>

      </main>
      <Footer />


    </>
  )
}

export default App
