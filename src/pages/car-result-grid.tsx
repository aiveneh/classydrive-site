import React from 'react';

export default function CarResultGrid(props) {
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
            <div className="col-xs-12 col-sm-8 col-md-9">
              <div className="content-wrapper">
                <div className="result-sorting-wrapper mb-30">
                  <div className="row">
                    <div className="col-sm-12 col-md-5">
                      <div className="text-holder">showing {cars.length} results</div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                      <div className="result-sorting-nav">
                        <ul>
                          <li className="active">
                            <a href="/cars/search/?make={{query.make}}&model={{query.model}}&view=grid">
                              <i className="fa fa-th"></i>
                            </a>
                          </li>
                          <li>
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

                <div className="car-item-wrapper alt-bg-white">
                  <div className="GridLex-gap-30">
                    <div className="GridLex-grid-noGutter-equalHeight GridLex-grid-center">
                      {cars.map((item) => (
                        <div className="GridLex-col-4_sm-6_xs-12" key={item.make}>
                          <div className="car-item">
                            <a href="/car/detail/{{this._id}}">
                              <div className="image">
                                <img src={item.exteriorImages[0]} alt={item.make} />
                              </div>

                              <div className="content">
                                <h5>{item.make}</h5>
                                <h6>{item.model}</h6>
                                <p className="price">&#8358;{item.price}</p>
                              </div>

                              <div className="bottom">
                                <ul className="car-meta clearfix">
                                  <li>
                                    <i className="fa fa-cogs"></i>
                                    {item.fuelType}
                                  </li>
                                  <li>
                                    <i className="fa fa-tachometer"></i>
                                    {item.engineSize}
                                  </li>
                                </ul>
                              </div>
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="paging-wrapper mt-30 clearfix">
                  <nav className="pull-right">
                    <ul className="paging">
                      <li className="disabled">
                        <a href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">5</a>
                      </li>
                      <li>
                        <a href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* <div id="react_app"></div> */}
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
