import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import AppBar from './components/AppBar/AppBar';
import Order from './components/Order/Order';
import ProductAll from './components/ProductAll/ProductAll';
import ProductSingle from './components/ProductSingle/ProductSingle';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Router>
        <Routes>
          <Route path="/" element={<ProductAll />} />
          <Route path="/products" element={<ProductAll />} />
          <Route path="/products/:id" element={<ProductSingle />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
