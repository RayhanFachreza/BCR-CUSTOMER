import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';
import { currencyFormat } from '../../../helper';
import UserIcon from './assets/user-icon.svg';
import placeholderImg from '../../../assets/images/placeholder-img.webp';
import './style.css';

const CarDesc = () => {
  const [detail, setDetail] = useState({});
  let { id } = useParams();

  // const baseUrl = 'http://localhost:4000';
  const baseUrl = 'https://bootcamp-rent-cars.herokuapp.com/customer';

  const fetch = useRef(true);

  const getDetail = (id) => {
    Axios.get(`${baseUrl}/car/${id}`)
      .then((response) => {
        setDetail(response.data)
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (fetch.current) {
      fetch.current = false;
      getDetail(id)
    }
  }, [id])

  return (
    <section>
      <div className="backButton">
        <Link to={`/find-car`} className="btn">
          KEMBALI KE PENCARIAN MOBIL
        </Link>
      </div>
      <div className="car-desc">
        <div className="container">
          <div className="car-desc-border">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <div className="package-desc">
                  <div className="card">
                    <h3>Tentang Paket</h3>
                    <h3>Include</h3>
                    <ul>
                      <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                      <li>Sudah termasuk bensin selama 12 jam</li>
                      <li>Sudah termasuk Tiket Wisata</li>
                      <li>Sudah termasuk pajak</li>
                    </ul>
                    <h3>Exclude</h3>
                    <ul>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>
                    <h3>Refund, Reschedule, Overtime</h3>
                    <ul>
                      <li>Tidak termasuk biaya makan sopir Rp 75.0000/hari</li>
                      <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                      <li>Tidak termasuk biaya makan sopir Rp 75.0000/hari</li>
                      <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                      <li>Tidak termasuk biaya makan sopir Rp 75.0000/hari</li>
                      <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="card-detail">
                  <div className="card">
                    <img
                      src={detail.image !== null ? detail.image : placeholderImg}
                      className="card-img"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{detail.name}</h5>
                      <div className="category">
                        <img src={UserIcon} alt="" />
                        <p>{(() => {
                          switch (detail.category) {
                            case "small": return "2-4 orang";
                            case "medium": return "4-6 orang";
                            case "large": return "6-8 orang";
                            default: return "-"
                          }
                        })()}</p>
                      </div>
                      <div className="price">
                        <h4>Total</h4>
                        <h4>Rp {currencyFormat(detail.price)}</h4>
                      </div>
                      <div className="backButton2">
                        <Link to={`/find-car`} className="btn">
                          KEMBALI
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CarDesc;