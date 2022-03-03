import React from 'react';

export default function Filters() {
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 mb-30">
        <div className="side-module-2 mt-5">
          <h3>Filter by</h3>

          <div className="row gap-20 mt-30">
            <div className="col-xss-12 col-xs-6 col-sm-3 col-md-4">
              <div className="form-group">
                <div className="fancy-select">
                  <select
                    className="custom-select fancified"
                    style={{
                      width: '1px',
                      height: '1px',
                      display: 'block',
                      position: 'absolute',
                      top: '0px',
                      left: '0px',
                      opacity: 0,
                    }}
                  >
                    <option value="0">Maker</option>
                    <option value="1">Audi</option>
                    <option value="2">BMW</option>
                    <option value="2">Nissan</option>
                    <option value="3">Toyota</option>
                    <option value="4">Honda</option>
                    <option value="5">Saab</option>
                    <option value="6">Volvo</option>
                    <option value="7">Mazda</option>
                    <option value="8">Mini</option>
                    <option value="9">Mercedes-Benz</option>
                    <option value="10">Lotus</option>
                    <option value="11">Fiat</option>
                    <option value="12">Lexus</option>
                    <option value="13">Subaru</option>
                    <option value="14">Jaguar</option>
                    <option value="15">Land Rover</option>
                    <option value="16">Isuzu</option>
                  </select>
                  <div className="form-control selected">Toyota</div>
                  <ul className="options">
                    <li data-raw-value="0" className="">
                      Maker
                    </li>
                    <li data-raw-value="1" className="">
                      Audi
                    </li>
                    <li data-raw-value="2" className="">
                      BMW
                    </li>
                    <li data-raw-value="2" className="">
                      Nissan
                    </li>
                    <li data-raw-value="3" className="selected">
                      Toyota
                    </li>
                    <li data-raw-value="4">Honda</li>
                    <li data-raw-value="5">Saab</li>
                    <li data-raw-value="6">Volvo</li>
                    <li data-raw-value="7">Mazda</li>
                    <li data-raw-value="8">Mini</li>
                    <li data-raw-value="9">Mercedes-Benz</li>
                    <li data-raw-value="10">Lotus</li>
                    <li data-raw-value="11">Fiat</li>
                    <li data-raw-value="12">Lexus</li>
                    <li data-raw-value="13">Subaru</li>
                    <li data-raw-value="14">Jaguar</li>
                    <li data-raw-value="15">Land Rover</li>
                    <li data-raw-value="16">Isuzu</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xss-12 col-xs-6 col-sm-3 col-md-4">
              <div className="form-group">
                <div className="fancy-select">
                  <select
                    className="custom-select fancified"
                    style={{
                      width: '1px',
                      height: '1px',
                      display: 'block',
                      position: 'absolute',
                      top: '0px',
                      left: '0px',
                      opacity: 0,
                    }}
                  >
                    <option value="0">Model</option>
                    <option value="1">Series 1</option>
                    <option value="2">Series 2</option>
                    <option value="2">Series 3</option>
                    <option value="3">Series 4</option>
                    <option value="4">Series 5</option>
                    <option value="5">Series 6</option>
                    <option value="6">Series 7</option>
                    <option value="7">X 1</option>
                    <option value="8">X 3</option>
                    <option value="9">X 5</option>
                    <option value="10">Z 4</option>
                  </select>
                  <div className="form-control selected">Series 2</div>
                  <ul className="options">
                    <li data-raw-value="0" className="">
                      Model
                    </li>
                    <li data-raw-value="1" className="">
                      Series 1
                    </li>
                    <li data-raw-value="2" className="">
                      Series 2
                    </li>
                    <li data-raw-value="2" className="selected">
                      Series 3
                    </li>
                    <li data-raw-value="3">Series 4</li>
                    <li data-raw-value="4">Series 5</li>
                    <li data-raw-value="5">Series 6</li>
                    <li data-raw-value="6">Series 7</li>
                    <li data-raw-value="7">X 1</li>
                    <li data-raw-value="8">X 3</li>
                    <li data-raw-value="9">X 5</li>
                    <li data-raw-value="10">Z 4</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xss-12 col-xs-6 col-sm-3 col-md-4">
              <div className="form-group">
                <div className="fancy-select">
                  <select
                    className="custom-select fancified"
                    style={{
                      width: '1px',
                      height: '1px',
                      display: 'block',
                      position: 'absolute',
                      top: '0px',
                      left: '0px',
                      opacity: 0,
                    }}
                  >
                    <option value="0">Year</option>
                    <option value="1">2000</option>
                    <option value="2">2001</option>
                    <option value="2">2002</option>
                    <option value="3">2003</option>
                    <option value="4">2004</option>
                    <option value="5">2005</option>
                    <option value="6">2006</option>
                    <option value="7">2007</option>
                    <option value="8">2008</option>
                    <option value="9">2009</option>
                    <option value="10">2010</option>
                  </select>
                  <div className="form-control selected">2003</div>
                  <ul className="options">
                    <li data-raw-value="0" className="">
                      Year
                    </li>
                    <li data-raw-value="1" className="">
                      2000
                    </li>
                    <li data-raw-value="2" className="">
                      2001
                    </li>
                    <li data-raw-value="2" className="">
                      2002
                    </li>
                    <li data-raw-value="3" className="selected">
                      2003
                    </li>
                    <li data-raw-value="4">2004</li>
                    <li data-raw-value="5">2005</li>
                    <li data-raw-value="6">2006</li>
                    <li data-raw-value="7">2007</li>
                    <li data-raw-value="8">2008</li>
                    <li data-raw-value="9">2009</li>
                    <li data-raw-value="10">2010</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
