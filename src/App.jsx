import { Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App
