import React, { useRef, useState } from 'react';
import Select from 'react-select';
import './style.css';


const Filter = (filterData) => {
  const [active, setActive] = useState(false);

  const overlayActive = () => {
    document.body.style.overflow = "hidden";
    setActive(true);
  };
  const overlayDeactive = () => {
    document.body.style.overflow = "";
    setActive(false);
  };

  const titleRef = useRef()

  function handleBackClick() {
    titleRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    })
  };


  return (
    <section
      className="filter"
      ref={titleRef}
      onClick={handleBackClick}
    >
      <div className="container">
        <div className={`overlay-bg-2 ${active ? 'overlay-active' : ''}`} onClick={overlayDeactive} />
        <div className={`filter-border ${active ? 'overlay-active' : ''}`}>
          <div className="row">
            <form className="filter-form" onSubmit={filterData.getData}>

              <div className="form">

                <div className="col-lg-3">
                  <div className="form-border">
                    <div className="mb-3">
                      <label className="form-label">Nama Mobil</label>
                      <input
                        type="text"
                        onClick={overlayActive}
                        className="form-control"
                        placeholder="Ketik nama/tipe mobil"
                        ref={filterData.carName}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="form-border">
                    <label className="form-label">Kategori</label>
                    {/* <select
                      className="form-select"
                      onClick={overlayActive}
                      ref={filterData.category}
                    >
                      <option value="">
                        Masukan Kapasitas Mobil
                      </option>
                      <option value="small">2 - 4 orang</option>
                      <option value="medium">4 - 6 orang</option>
                      <option value="large">6 - 8 orang</option>
                    </select> */}
                    <Select
                      className="select-form"
                      classNamePrefix="select"
                      placeholder="Masukan Kapasitas Mobil"
                      onFocus={overlayActive}
                      ref={filterData.category}
                      onChange={(e) => filterData.category.current.value = e.value}
                      options={[
                        { value: "small", label: '2 - 4 orang' },
                        { value: "medium", label: '4 - 6 orang' },
                        { value: "large", label: '6 - 8 orang' }
                      ]} />
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="form-border">
                    <label className="form-label">Harga</label>
                    {/* <select
                      className="form-select"
                      onClick={overlayActive}
                      ref={filterData.priceRange}
                    >
                      <option value="">
                        Masukan Harga Sewa per Hari
                      </option>
                      <option value="small"> {'< Rp. 400.000'} </option>
                      <option value="medium"> Rp. 400.000 - Rp. 600.000 </option>
                      <option value="large"> {'> Rp. 600.000'} </option>
                    </select> */}
                    <Select
                      className="select-form"
                      classNamePrefix="select"
                      placeholder="Masukan Harga Sewa per Hari"
                      onFocus={overlayActive}
                      ref={filterData.priceRange}
                      onChange={(e) => filterData.priceRange.current.value = e.value}
                      options={[
                        { value: "small", label: '< Rp. 400.000' },
                        { value: "medium", label: 'Rp. 400.000 - Rp. 600.000' },
                        { value: "large", label: '> Rp. 600.000' }
                      ]} />
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="form-border">
                    <label className="form-label">Status</label>
                    {/* <select
                      className="form-select"
                      onClick={overlayActive}
                      ref={filterData.statusOrder}
                    >
                      <option />
                      <option value="true">Tersedia</option>
                      <option value="false">Disewa</option>
                    </select> */}
                    <Select
                      className="select-form"
                      classNamePrefix="select"
                      placeholder=""
                      onFocus={overlayActive}
                      ref={filterData.statusOrder}
                      onChange={(e) => filterData.statusOrder.current.value = e.value}
                      options={[
                        { value: "false", label: 'Disewa' },
                        { value: "true", label: 'Tersedia' }
                      ]} />
                  </div>
                </div>
              </div>

              <div className="submit">
                <div className="button">
                  <button
                    className="btn"
                    type="submit"
                    onClick={overlayDeactive}
                  >
                    Cari Mobil
                  </button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Filter;