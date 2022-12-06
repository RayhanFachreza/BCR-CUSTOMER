import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/home-page';
import FindCar from './pages/find-car';
import CarDetail from './pages/car-detail';
import PaymentDesc from './components/sub/payment-desc';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/find-car" element={<FindCar />} />
        <Route path="/find-car/:id" element={<CarDetail />} />
        <Route path="/payment" element={<PaymentDesc />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;