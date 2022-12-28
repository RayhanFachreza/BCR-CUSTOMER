import React from 'react';
import Logo from '../../../assets/images/logo.svg';
import Smile from './assets/smile.png';
import './style.css';

const Invoice = () => {
  return (
    <div className="invoice">
      <div className="invoice-hero">
        <div className="invoice-date">
          <h1>INVOICE</h1>
          <p>Date: blablabla</p>
        </div>
        <img src={Logo} alt="logo" />
      </div>
      <div className="payment-details">
        <h2>PAYMENT DETAILS</h2>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <p>Order ID</p>
              <p>Method</p>
              <p>Status</p>
            </div>
            <div className="col-9">
              <p>: 684981494</p>
              <p>: BCA Transfer</p>
              <p>: Paid</p>
            </div>
          </div>
        </div>
      </div>
      <div className="customer-details">
        <h2>CUSTOMER DETAILS</h2>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <p>Name</p>
              <p>Email</p>
              <p>Contact Number</p>
            </div>
            <div className="col-9">
              <p>: Customer</p>
              <p>: customer@bcr.io</p>
              <p>: +6281234567890</p>
            </div>
          </div>
        </div>
      </div>
      <div className="company-details">
        <h2>COMPANY DETAILS</h2>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <p>Name</p>
              <p>Email</p>
              <p>Address</p>
            </div>
            <div className="col-9">
              <p>: Binar Car Rental</p>
              <p>: binarcarrental@gmail.com</p>
              <p>: Jalan Suroyo No. 161<br />&nbsp;&nbsp;Mayangan Kota Probolonggo<br />&nbsp;&nbsp;672000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="purchase-details">
        <h2>PURCHASE DETAILS</h2>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <p>Car Description</p>
              <p>Start Rent</p>
              <p>End Rent</p>
              <p>Car Rental Time</p>
              <p>Daily Rate</p>
              <h4>Payment Amount</h4>
            </div>
            <div className="col-9">
              <p>: blablablabla</p>
              <p>: Day, Date Month Year</p>
              <p>: Day, Date Month Year</p>
              <p>: 7 Days</p>
              <p>: Rp 500.000</p>
              <h4>: Rp 3.500.000</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="thank-you">Thank You!</div>
      <img src={Smile} alt="smile" />
      <div className="copyright">
        <h4>&copy; Copyright Binar 2022</h4>
        <img src={Logo} alt="" />
      </div>
    </div>
  )
};

export default Invoice;