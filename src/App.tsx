import React from 'react';

import './App.css';
import ProductAll from './components/ProductAll/ProductAll';

function App() {

  return (
    <div className="App">
      <h1>This is the app HEADER</h1>
      <ProductAll />
    </div>
  );
}

export default App;

//      <ProductSingle product={data[5]}/>