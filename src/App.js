import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import CartPage from './pages/cart';
import ProductPage from './pages/product';
import LoginPage from './pages/login';
import HomePage from './pages/home';

import './App.scss';

function App() {
  return (
    <Router>
      <Header />

      <div className="page-container">
        <Routes>
          <Route exact path="/cart">
            <CartPage />
          </Route>

          <Route exact path="/product/:productId">
            <ProductPage />
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route>
            <HomePage />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;