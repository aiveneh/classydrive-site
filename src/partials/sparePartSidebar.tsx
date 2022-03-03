import React from 'react';
import QuickInfo from './quickInfo';

export default function SpartpartSidebar() {
  return (
    <div className="col-xs-12 col-sm-4 col-md-3">
      <aside className="sidebar-wrapper">
        {/* spareparts search */}
        <div className="result-filter-wrapper">
          <h3>Make a New Search</h3>
          <div className="content">
            <form className="form-holder" method="get" action="/spareparts/search">
              <div className="holder-item mb-20">
                <input
                  style={{ width: '100%' }}
                  type="text"
                  name="name"
                  className="custom-select"
                  id="car-search-model"
                  placeholder="Sparepart Name"
                  required
                />
              </div>

              {/* <div className="holder-item mb-20">

              <select className="custom-select" id="car-search-price">
                <option value="0">Price</option>
                <option value="1">Less than 30k</option>
                <option value="2">31k-50k</option>
                <option value="3">51k-70k</option>
                <option value="4">71k-90k</option>
                <option value="5">Greater Than 90k</option>
              </select>

            </div> */}
              <div className="holder-item">
                <button
                  style={{ backgroundColor: 'inherit' }}
                  // type="submit"
                  className="btn btn-block"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>

        <QuickInfo />
      </aside>
    </div>
  );
}
