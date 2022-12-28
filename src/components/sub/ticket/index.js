import React from 'react';
import { Link } from 'react-router-dom';
import ArrowLeft from './assets/arrow-left.svg';
import Rect from './assets/rect.svg';
import Success from './assets/success.svg';
import Download from './assets/download.svg';
import Pict from './assets/fi_image.svg';
import './style.css';

const Ticket = () => {
  return (
    <section className="e-ticket">
      <div className="bg" />
      <div className="container">
        <div className="payment-nav">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="back-button">
                  <Link to={-1}>
                    <img src={ArrowLeft} alt="back to detail mobil" />
                  </Link>
                  <h3>BCA Transfer</h3>
                </div>
                <h4>Order ID: xxxxxxxx</h4>
              </div>
              <div className="col-6">
                <div className="state-payment">
                  <div className="one">1</div>
                  <h5>Pilih Metode</h5>
                  <img src={Rect} alt="-" />
                  <div className="two">2</div>
                  <h5>Bayar</h5>
                  <img src={Rect} alt="-" />
                  <div className="three">3</div>
                  <h5>Tiket</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ticket">
          <img src={Success} alt="" />
          <h3>Pembayaran Berhasil!</h3>
          <h5>Tunjukkan invoice ini ke petugas BCR di titik temu.</h5>
          <div className="print-ticket">
            <div className="invoice">
              <div className="invoice-desc">
                <h4>Invoice</h4>
                <p>*no invoice</p>
              </div>
              <div className="download-btn">
                <img src={Download} alt="" />
                <h4>Unduh</h4>
              </div>
            </div>
            <div className="pdf-viewer">
              <div className="pdf">
                <img src={Pict} alt="" />
                <p>PDF Viewer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ticket;