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
import BankConfirm from './pages/bank-confirm'


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
          <Route path="/find-car/:id" element={<CarDetail />} />
          <Route path="/payment/bank-confirm" element={<BankConfirm />} />
          <Route path="/payment/:id" element={<Payment />} />
        </Route>
      </Routes>
      {location.pathname !== '/sign-in'  && location.pathname !== '/sign-up' &&  <Footer/>}  
      
    </div>
  );
};

export default App;