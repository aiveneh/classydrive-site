import React from 'react';

export default function CarSearch() {
  // TODO fetch contasnt on load
  return (
    <div className="result-filter-wrapper">
      <h3>Make a New Search</h3>
      <div className="content">
        <form className="form-holder" action="/cars/search" method="GET">
          <div className="holder-item mb-20">
            <select name="make" className="form-control" id="car-search-maker">
              <option value="">Make</option>
              {/* {constants.vehicleMakeTypes.map(item => <option key={item} value={item}>{item}</option>)} */}
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="holder-item mb-20">
            <input
              style={{ width: '100%' }}
              type="text"
              name="model"
              placeholder="Car model"
              className="custom-select"
              id="car-search-model"
            />
          </div>
          {/* <div className="holder-item mb-20">

                <select
                  className="custom-select"
                  id="car-search-year"
                  name="year"
                >
                  <option value="">Year</option>
                  {years.map(item => <option key={item} value={item}>{item}</option>)}
                  <option value="Other">Other</option>
                </select>

              </div>
              <div className="holder-item mb-20">

                <select className="custom-select" id="car-search-price" name="price">
                  <option value="0">Price</option>
                  <option value="1">Less than 500k</option>
                  <option value="2">501k-1m</option>
                  <option value="3">1.1m-3m</option>
                  <option value="4">3m-5m</option>
                  <option value="5">Greater Than 5m</option>
                </select>

              </div> */}
          <div className="holder-item">
            <button style={{ backgroundColor: 'inherit' }} className="btn btn-block">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
