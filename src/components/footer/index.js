import React from 'react';
import './style.css';
import Logo from '../../assets/images/logo.svg';
import FbIcon from './assets/icon_facebook.svg';
import IgIcon from './assets/icon_instagram.svg';
import TwtIcon from './assets/icon_twitter.svg';
import MailIcon from './assets/icon_mail.svg';
import TwcIcon from './assets/icon_twitch.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-8">
            <div className="address">
              <h4>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h4>
              <h4>binarcarrental@gmail.com</h4>
              <h4>081-233-334-808</h4>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <ul className="nav-footer">
              <li>
                <a href="">Our Services</a>
              </li>
              <li>
                <a href="">Why Us</a>
              </li>
              <li>
                <a href="">Testimonial</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-8">
            <div className="info-binar">
              <h4>Connect with us</h4>
              <a href="https://www.facebook.com/binaracademy/" target="_blank">
                <img src={FbIcon} alt="" />
              </a>
              <a href="https://www.instagram.com/academybinar/" target="_blank">
                <img src={IgIcon} alt="" />
              </a>
              <a href="https://twitter.com/academybinar" target="_blank">
                <img src={TwtIcon} alt="" />
              </a>
              <a href="info@binar.co.id" target="_blank">
                <img src={MailIcon} alt="" />
              </a>
              <a href="https://m.twitch.tv/" target="_blank">
                <img src={TwcIcon} alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-4">
            <div className="copyright">
              <h4>&copy; Copyright Binar 2022</h4>
              <img src={Logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;