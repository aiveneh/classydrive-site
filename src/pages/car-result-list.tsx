import React from 'react';

export default function CarResultList(props) {
  const cars = [];
  const { make, model } = props;

  return (
    <div className="main-wrapper scrollspy-container">
      <div className="breadcrumb-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 hidden-xs">
              <h4 className="page-title">
                Search Results For - {make} {model}
              </h4>
            </div>

            <div className="col-xs-12 col-sm-6">
              <ol className="breadcrumb">
                <li className="active">
                  Search Results For - {make} {model}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="container-outer">
        <div className="container">
          <div className="row gap-25-sm">
            <div className="col-sm-8 col-md-9">
              <div className="content-wrapper">
                <div className="result-sorting-wrapper mb-30">
                  <div className="row">
                    <div className="col-sm-12 col-md-5">
                      <div className="text-holder">showing {cars.length} results</div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                      <div className="result-sorting-nav">
                        <ul>
                          <li>
                            <a href="/cars/search/?make={{query.make}}&model={{query.model}}&view=grid">
                              <i className="fa fa-th"></i>
                            </a>
                          </li>
                          <li className="active">
                            <a href="/cars/search/?make={{query.make}}&model={{query.model}}&view=list">
                              <i className="fa fa-list-ul"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="result-sorting-select">
                        <select className="custom-select">
                          <option value="0">Sort by</option>
                          <option value="1">Name</option>
                          <option value="2">Price</option>
                          <option value="2">Engine</option>
                          <option value="3">Year</option>
                          <option value="4">Model</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {cars.map((item) => (
                  <div className="car-item-list-wrapper" key={item.make}>
                    <div className="car-item-list">
                      <div className="image">
                        <img src={item.exteriorImages[0]} alt={item.make} />
                      </div>

                      <div className="content">
                        <h5>
                          {item.make} {item.model}
                        </h5>

                        <p className="short-info">{item.description}</p>

                        <div className="row">
                          <div className="col-xss-12 col-xs-7 col-sm-7 col-md-7">
                            <span className="price">&#8358;{item.price}</span>
                          </div>
                          <div className="col-xss-12 col-xs-5 col-sm-5 col-md-5">
                            <a href="/car/{item._id}" className="btn btn-primary">
                              Details
                            </a>
                          </div>
                        </div>
                      </div>

                      <ul className="car-meta clearfix">
                        <li data-toggle="tooltip" data-placement="top" title="year: {{this.year}}">
                          <i className="fa fa-calendar"></i> {item.year}
                        </li>

                        <li data-toggle="tooltip" data-placement="top" title="engine: {{this.fuelType}}">
                          <i className="fa fa-cogs"></i> {item.fuelType}
                        </li>

                        <li data-toggle="tooltip" data-placement="top" title="mile: {{this.engineSize}}">
                          <i className="fa fa-tachometer"></i> {item.engineSize}
                        </li>

                        <li data-toggle="tooltip" data-placement="top" title="location: Lagos, Nigeria">
                          <i className="fa fa-map-marker"></i> Lagos, Nigeria
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}

                {/* < div className="paging-wrapper clearfix">
                  <nav className="pull-right">
                    <ul className="paging">
                      <li className="disabled">
                        <a href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li className="active"><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                      <li>
                        <a href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div> */}
              </div>

              <div className="col-sm-4 col-md-3">
                <aside className="sidebar-wrapper">
                  <div className="result-filter-wrapper">
                    <h3>Filter Your Search</h3>
                    <div className="content">
                      <form className="form-holder" action="/cars/search" method="get">
                        <div className="holder-item mb-20">
                          <select className="custom-select" required name="make">
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
                        <div className="holder-item mb-20">
                          <select className="custom-select" id="car-search-model" name="model">
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

                        {/* < div className="holder-item mb-20">

                    <select className="custom-select" id="car-search-year">
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
                      <div className="holder-item mb-20">

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
                          <button type="submit" style={{ backgroundColor: 'inherit' }} className="btn btn-block">
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="side-module mt-40">
                    <h3>Recent Added Cars</h3>
                    <div className="inner">
                      <div className="car-item-sm">
                        <a href="#">
                          <div className="image-bg" style={{ backgroundImage: `url(/images/car/01.jpg)` }} />

                          <div className="content">
                            <h6>Ferrari 430 Scuderia</h6>
                            <div className="bottom">
                              <ul className="car-meta clearfix">
                                <li>
                                  <i className="fa fa-cogs"></i> Gasoline
                                </li>
                                <li>
                                  <i className="fa fa-tachometer"></i> 2,888 cc.
                                </li>
                              </ul>
                              <p className="price">20,887$</p>
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="car-item-sm">
                        <a href="#">
                          <div className="image-bg" style={{ backgroundImage: `url(/images/car/02.jpg)` }} />

                          <div className="content">
                            <h6>Seat Leon Cupra</h6>
                            <div className="bottom">
                              <ul className="car-meta clearfix">
                                <li>
                                  <i className="fa fa-cogs"></i> Deisel
                                </li>
                                <li>
                                  <i className="fa fa-tachometer"></i> 2,300 cc.
                                </li>
                              </ul>
                              <p className="price">20,887$</p>
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="car-item-sm">
                        <a href="#">
                          <div className="image-bg" style={{ backgroundImage: `url(/images/car/03.jpg)` }} />
                          <div className="content">
                            <h6>Porsche Cayenne Turbo S</h6>
                            <div className="bottom">
                              <ul className="car-meta clearfix">
                                <li>
                                  <i className="fa fa-cogs"></i> Gasoline
                                </li>
                                <li>
                                  <i className="fa fa-tachometer"></i> 1,800 cc.
                                </li>
                              </ul>
                              <p className="price">20,887$</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-40 bt pt-20">
                    <div className="featured-item">
                      <div className="icon">
                        <i className="fa fa-phone"></i>
                      </div>

                      <div className="content">
                        <h5>Quick Call</h5>
                        <p>08066088506‬</p>
                      </div>
                    </div>
                    <div className="featured-item">
                      <div className="icon">
                        <i className="fa fa-envelope"></i>
                      </div>

                      <div className="content">
                        <h5>Quick Email</h5>
                        <p>support@classydrive.com</p>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      title: 'ClassyDrive - ',
      description: '',
    },
  };
}
