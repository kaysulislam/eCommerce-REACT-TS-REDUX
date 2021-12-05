import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import AppBar from './components/AppBar/AppBar';
import Order from './components/Order/Order';
import ProductAll from './components/ProductAll/ProductAll';
import ProductSingle from './components/ProductSingle/ProductSingle';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';

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
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
