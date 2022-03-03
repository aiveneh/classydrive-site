import React, { Fragment } from 'react';

/**
 * NOT USED
 * Full search section on the homepage
 */
export default function CarFullSearch() {
  return (
    <Fragment>
      <div className="tab-style-4-wrapper">
        <div className="container">
          <div className="tab-style-4">
            <ul id="detailTab" className="tab-nav clearfix">
              <li className="active">
                <a href="#browseByTab1" data-toggle="tab">
                  Car Search form
                </a>
              </li>
              <li>
                <a href="#browseByTab2" data-toggle="tab">
                  Browse by Car Types
                </a>
              </li>
              <li>
                <a href="#browseByTab3" data-toggle="tab">
                  Browse by Brands
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-light section pt-60 pb-50">
        <div className="container">
          <div className="tab-content">
            <div className="tab-pane fade in active" id="browseByTab1">
              <form className="">
                <div className="row gap-20 mb-5">
                  <div className="col-xs-12 col-sm-3">
                    <div className="form-group">
                      <select className="custom-select">
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
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-3">
                    <div className="form-group">
                      <select className="custom-select">
                        <option value="0">Body Year</option>
                        <option value="1">Sedan</option>
                        <option value="2">SUV</option>
                        <option value="2">Truck/pickup</option>
                        <option value="3">Wagon</option>
                        <option value="4">Coupe</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-3">
                    <div className="form-group">
                      <select className="custom-select">
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
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-3">
                    <div className="form-group">
                      <select className="custom-select">
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
                    </div>
                  </div>

                  <div className="col-xs-12 col-xs-offset-0 col-sm-6 col-sm-offset-3 mt-5">
                    <a href="" className="btn btn-primary btn-block btn-lg">
                      Search your car
                    </a>
                  </div>
                </div>
              </form>
            </div>

            <div className="tab-pane fade" id="browseByTab2">
              <div className="browse-by-wrapper mb-20">
                <ul className="browse-by-list col-7 col-5-xs mmh clearfix">
                  <li>
                    <a href="#">
                      <div className="icon">
                        <i className="flaticon-car-transport-3"></i>
                      </div>
                      <h6>Sedan</h6>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon">
                        <i className="flaticon-car-transport-35"></i>
                      </div>
                      <h6>SUV</h6>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon">
                        <i className="flaticon-car-transport-63"></i>
                      </div>
                      <h6>Truck</h6>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon">
                        <i className="flaticon-car-black-20"></i>
                      </div>
                      <h6>Wagon</h6>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon">
                        <i className="flaticon-car-transport-20"></i>
                      </div>
                      <h6>Hatchback</h6>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon">
                        <i className="flaticon-car-transport-3"></i>
                      </div>
                      <h6>Luxury</h6>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon">
                        <i className="flaticon-car-transport-3"></i>
                      </div>
                      <h6>Crossover</h6>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon">
                        <i className="flaticon-car-black-21"></i>
                      </div>
                      <h6>Sport Car</h6>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon">
                        <i className="flaticon-car-transport-38"></i>
                      </div>
                      <h6>Minivan</h6>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon">
                        <i className="flaticon-car-black-19"></i>
                      </div>
                      <h6>Coupe</h6>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon">
                        <i className="flaticon-car-black-17"></i>
                      </div>
                      <h6>Convertible</h6>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon">
                        <i className="flaticon-car-transport-3"></i>
                      </div>
                      <h6>Hybrid</h6>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="tab-pane fade" id="browseByTab3">
              <div className="all-car-brand-wrapper mb-20">
                <ul className="call-car-brand-list col-4 col-2-sm mmt">
                  <li>
                    <a href="#">
                      <span className="image">
                        <img src="/images/car-brand/01.png" alt="Images" />
                      </span>{' '}
                      Brand One
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="image">
                        <img src="/images/car-brand/02.png" alt="Images" />
                      </span>{' '}
                      Maker Two
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="image">
                        <img src="/images/car-brand/03.png" alt="Images" />
                      </span>{' '}
                      Three Brand
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="image">
                        <img src="/images/car-brand/04.png" alt="Images" />
                      </span>{' '}
                      Model Four
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="image">
                        <img src="/images/car-brand/05.png" alt="Images" />
                      </span>
                      Vehicle Five
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="image">
                        <img src="/images/car-brand/06.png" alt="Images" />
                      </span>{' '}
                      Six Auto
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="image">
                        <img src="/images/car-brand/07.png" alt="Images" />
                      </span>{' '}
                      Mobil Seven
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="image">
                        <img src="/images/car-brand/08.png" alt="Images" />
                      </span>{' '}
                      Eight Trans
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="image">
                        <img src="/images/car-brand/09.png" alt="Images" />
                      </span>{' '}
                      Port Nine
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="image">
                        <img src="/images/car-brand/10.png" alt="Images" />
                      </span>{' '}
                      Ten Rod
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="image">
                        <img src="/images/car-brand/11.png" alt="Images" />
                      </span>
                      Kereta Eleven
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="image">
                        <img src="/images/car-brand/12.png" alt="Images" />
                      </span>
                      Twelve Road
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="image">
                        <img src="/images/car-brand/13.png" alt="Images" />
                      </span>
                      Thirteen Rod
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="image">
                        <img src="/images/car-brand/14.png" alt="Images" />
                      </span>
                      Fourteen
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="image">
                        <img src="/images/car-brand/15.png" alt="Images" />
                      </span>
                      Fifteen
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="image">
                        <img src="/images/car-brand/16.png" alt="Images" />
                      </span>
                      Sixteen
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="image">
                        <img src="/images/car-brand/17.png" alt="Images" />
                      </span>
                      Seventeen
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="image">
                        <img src="/images/car-brand/18.png" alt="Images" />
                      </span>
                      Eighteen
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="image">
                        <img src="/images/car-brand/19.png" alt="Images" />
                      </span>
                      Nineteen
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="image">
                        <img src="/images/car-brand/01.png" alt="Images" />
                      </span>{' '}
                      Brand One
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="image">
                        <img src="/images/car-brand/02.png" alt="Images" />
                      </span>{' '}
                      Maker Two
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="image">
                        <img src="/images/car-brand/03.png" alt="Images" />
                      </span>{' '}
                      Three Brand
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="image">
                        <img src="/images/car-brand/04.png" alt="Images" />
                      </span>{' '}
                      Model Four
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="image">
                        <img src="/images/car-brand/05.png" alt="Images" />
                      </span>
                      Vehicle Five
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
