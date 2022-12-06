import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowLeft from './assets/arrow-left.svg';
import Rect from './assets/rect.svg';
import Check from './assets/check.svg';
import UserIcon from './assets/user-icon.svg';
import UpDown from './assets/up-down.svg';
import './style.css';

const PaymentDesc = () => {
  const [selected, setSelected] = useState();
  const selectClick = (index) => {
    setSelected(index)
  };

  const [isToggled, setIsToggled] = useState(true);

  const styleToggled = {
    transform: isToggled ? 'rotate(180deg)' : '',
    transition: 'transform 500ms ease'
  };

  const styleLink = {
    background: "#5CB85F"
  }

  return (
    <section className="payment-desc">
      <div className="bg" />
      <div className="container">
        <div className="payment-nav">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="back-button">
                  <Link to={-1}>
                    <img src={ArrowLeft} alt="back to detail mobil" />
                  </Link>
                  <h3>Pembayaran</h3>
                </div>
              </div>
              <div className="col-md-8">
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
        <div className="filter-disabled">
          <div className="container">
            <div className="disabled">
              <div className="col-12">
                <div className="row">
                  <h3>Detail Pesananmu</h3>
                  <div className="col-lg-3">
                    <h4>Nama/Tipe Mobil</h4>
                    <div className="car-name">Innova</div>
                  </div>
                  <div className="col-lg-3">
                    <h4>Kategori</h4>
                    <div className="category">6 - 8 orang</div>
                  </div>
                  <div className="col-lg-3">
                    <h4>Tanggal Mulai Sewa</h4>
                    <div className="start-rent">2 Jun 2022</div>
                  </div>
                  <div className="col-lg-3">
                    <h4>Tanggal Akhir Sewa</h4>
                    <div className="finish-rent">8 Jun 2022</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="payment-detail">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <div className="choose-bank">
                  <h3>Pilih Bank Transfer</h3>
                  <p>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</p>
                  <ul>
                    <li
                      className={selected === 1 ? 'active' : null}
                      onClick={() => {
                        selectClick(1);
                        localStorage.setItem("bank", "BCA");
                      }}
                    >
                      <div className="cont">
                        <div className="bank">BCA</div>
                        <h5>BCA Transfer</h5>
                      </div>
                      {selected === 1 ? <img src={Check} alt="check-list" /> : null}
                    </li>
                    <li
                      className={selected === 2 ? 'active' : null}
                      onClick={() => {
                        selectClick(2);
                        localStorage.setItem("bank", "BNI")
                      }}
                    >
                      <div className="cont">
                        <div className="bank">BNI</div>
                        <h5>BNI Transfer</h5>
                      </div>
                      {selected === 2 ? <img src={Check} alt="check-list" /> : null}
                    </li>
                    <li
                      className={selected === 3 ? 'active' : null}
                      onClick={() => {
                        selectClick(3);
                        localStorage.setItem("bank", "Mandiri")
                      }}
                    >
                      <div className="cont">
                        <div className="bank">Mandiri</div>
                        <h5>Mandiri Transfer</h5>
                      </div>
                      {selected === 3 ? <img src={Check} alt="check-list" /> : null}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="detail-payment">
                  <h5>Innova</h5>
                  <div className="category">
                    <img src={UserIcon} alt="" />
                    <p>6-8 orang</p>
                  </div>
                  <div className="calc">
                    <div className="total-calc">
                      <div className="total">
                        <h5>Total</h5>
                        <img
                          src={UpDown}
                          onClick={() => setIsToggled(!isToggled)}
                          style={styleToggled}
                          alt="see calculation"
                        />
                      </div>
                      <h5>Rp 3.500.000</h5>
                    </div>
                    {
                      isToggled ?
                        <div className="detail">
                          <h5 className="title">Harga</h5>
                          <ul>
                            <li>
                              <p>Sewa Mobil Rp.500.000 x 7 Hari</p>
                              <p>Rp 3.500.000</p>
                            </li>
                          </ul>
                          <h5 className="title">Biaya Lainnya</h5>
                          <ul>
                            <li>
                              <p>Pajak</p>
                              <h6>Termasuk</h6>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <p>Biaya makan sopir</p>
                              <h6>Termasuk</h6>
                            </li>
                          </ul>
                          <h5 className="title">Belum Termasuk</h5>
                          <ul>
                            <li>
                              <p>Bensin</p>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <p>Tol dan parkir</p>
                            </li>
                          </ul>
                        </div> : null
                    }
                  </div>
                  <div className="result-calc">
                    <h4>Total</h4>
                    <h4>Rp 3.500.000</h4>
                  </div>
                  <Link
                    style={selected ? styleLink : {}}
                    to={selected ? '/payment/bank-confirm' : "#"}
                  >
                    Bayar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaymentDesc;