import './App.css';
import { Routes, Route } from 'react-router-dom';
import routes from './routes/routes';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Pizza from './pages/Pizza'; // Página para ver detalles de la pizza
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <Navbar />
      <main className='flex-grow'>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          {/* Asegúrate de que esta ruta esté configurada fuera del mapeo */}
          <Route path='/pizzas/:id' element={<Pizza />} />
        </Routes>
      </main>
      <Footer />

    </>
  );
}

export default App;
