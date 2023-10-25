import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages/Index.js'
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Categories from './pages/Categories.js'
import All from './components/Categories-pages/All.js'
import Chairs from './components/Categories-pages/Chairs.js'
import Furnitures from './components/Categories-pages/Furnitures.js'
import Electronics from './components/Categories-pages/Electronics.js'
import Lamp from './components/Categories-pages/Lamp.js'
import Kitchen from './components/Categories-pages/Kitchen.js'
import Skincare from './components/Categories-pages/Skincare.js'
import ProductPage from './pages/ProductPage.js'

function App() {

  return (
    <Router>
      <div className={`App overflow-x-hidden`}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='categories' element={<Categories />}>
            <Route path='all' element={<All />} />
            <Route path='furnitures' element={<Furnitures />} />
            <Route path='electronics' element={<Electronics />} />
            <Route path='lamp' element={<Lamp />} />
            <Route path='kitchen' element={<Kitchen />} />
            <Route path='chairs' element={<Chairs />} />
            <Route path='skin-care' element={<Skincare />} />
          </Route>
          <Route path='categories/products/:id' element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
