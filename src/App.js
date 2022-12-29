import React from 'react';
import { Routes, Route, useLocation, Outlet, Navigate } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/home-page';
import FindCar from './pages/find-car';
import CarDetail from './pages/car-detail';
import Signup from './pages/signup';
import Signin from './pages/signin';
import Payment from './pages/payment';
import BankConfirm from './pages/bank-confirm';
import ETicket from './pages/e-ticket';



const WithAuth = () => {
  const isAuth = window.localStorage.getItem('access_token');
  return (
    <>
      {!isAuth && <Navigate to={'/sign-up'}/>}  
      <Outlet/>
    </>
  );
}

const App = () => {

  const location = useLocation();

  return (
    <div className="App">

      {/* {["/sign-in", "/sign-up"].indexOf(window.location.pathname) === -1 && <Header />} */}
      
      {location.pathname !== '/sign-in'  && location.pathname !== '/sign-up' &&  <Header/>}  

      <Routes>
        {/* Public */}
        <Route path="/sign-up" element={<Signup/>} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/" element={<HomePage />} />

        {/* WithAuth  */}
        <Route element={<WithAuth/>} >
          <Route path="/find-car" element={<FindCar />} />
          <Route path="/find-car-result/:id" element={<CarDetail />} />
          <Route path="/payment/bank-confirm" element={<BankConfirm />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="/payment/bank-confirm/e-ticket" element={<ETicket />} />
        </Route>
      </Routes>
      {location.pathname !== '/sign-in'  && location.pathname !== '/sign-up' &&  <Footer/>}  
      
    </div>
  );
};

export default App;