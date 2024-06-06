import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import FooterContact from './components/footer/FooterContact';
import ProductSort from './pages/products/ProductSort';
import Product from './pages/products/Product';
import CartProvider from './pages/products/Cart/CartContext';

function App() {
  return (
    <>
      <CartProvider>
        {/*Provides cart functionality across the entire app */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products-sort' element={<ProductSort />} />
          <Route path='/product/:id' element={<Product />} />
        </Routes>
        <FooterContact />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
