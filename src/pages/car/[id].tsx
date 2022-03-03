import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { selector, action } from '../../redux/entities/cars';
import { formatPrice, getCarId } from '../../helpers';
import SimilarCars from '../../partials/similarCars';
import CarSidebar from '../../partials/carSidebar';
import EnquiryModal from '../../partials/enquiryModal';

export default function CarDetail() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { query } = router;

  useEffect(() => {
    if (Object.keys(query.id).length > 0) {
      const { id } = query;

      dispatch(action.readOneAction({ id: getCarId(id.toString()) }).loading);
    }
  }, [query]);

  const car = useSelector((state) => selector(state).item) || {};

  return (
    <div className="main-wrapper scrollspy-container">
      <div className="breadcrumb-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 hidden-xs">
              <h2 className="page-title">Car Detail</h2>
            </div>

            <div className="col-xs-12 col-sm-6">
              <ol className="breadcrumb">
                <li className="active text">You Are Here:</li>
                <li>
                  <a href="#">Home</a>
                </li>
                <li className="active">Car Detail</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="container-outer">
        <div className="container">
          <div className="row gap-25-sm">
            <div className="col-xs-12 col-sm-8 col-md-9">
              <div className="content-wrapper pb-30 pb-0-xs">
                <div className="detail-titile">
                  <div className="row">
                    <div className="col-xs-12 col-sm-9">
                      <small style={{ color: 'red' }}>{car.sold && <strong>SOLD</strong>}</small>
                      <h3 className="car-name">{`${car.year} ${car.make}  ${car.model}`}</h3>
                      <small>{/* <strong>{{ isSold car }}</strong> */}</small>
                      <div className="detail-location">
                        <i className="fa fa-map-marker"></i>
                        Lagos, Nigeria
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-3 text-right text-left-xs">
                      <div className="price text-primary">{formatPrice(car.price)}</div>
                      <div className="condition">{car.condition} Car</div>
                    </div>
                  </div>
                </div>

                <div className="row gap-5">
                  <div className="col-sm-12 col-md-8">
                    <div className="tab-style-1 detail-tab">
                      <div className="tab-style-1-header clearfix">
                        <ul id="detailTab" className="tab-nav clearfix mb-10-xss">
                          <li className="active">
                            <a href="#detailTab1" data-toggle="tab">
                              Exterior
                            </a>
                          </li>
                          <li>
                            <a href="#detailTab2" data-toggle="tab">
                              Interior
                            </a>
                          </li>
                        </ul>
                        <a data-toggle="modal" href="#enquiryModal" className="btn btn-info pull-right pull-left-xss">
                          Enquire Now
                        </a>
                      </div>

                      <div id="myTabContent" className="tab-content">
                        <div className="tab-pane fade in active" id="detailTab1">
                          <div className="tab-content-inner">
                            <div className="slick-gallery-slideshow">
                              <div className="slider gallery-slideshow gallery-slideshow-not-tab">
                                {car.exteriorImages.map((item) => (
                                  <div key={item}>
                                    <div className="image">
                                      <img className="h-380" src={item} alt={car.model} />
                                    </div>
                                  </div>
                                ))}
                              </div>

                              <div className="slider gallery-nav gallery-nav-not-tab">
                                {car.exteriorImages.map((item) => (
                                  <div key={item}>
                                    <div className="image">
                                      <img src={item} alt={car.model} />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="tab-pane fade" id="detailTab2">
                          <div className="tab-content-inner">
                            <div className="slick-gallery-slideshow">
                              <div className="slider gallery-slideshow gallery-slideshow-tab-01">
                                {car.interiorImages.map((item) => (
                                  <div className="image" key={item}>
                                    <img className="h-380" src={item} alt={car.model} />
                                  </div>
                                ))}
                              </div>

                              <div className="slider gallery-nav gallery-nav-tab-01">
                                {car.interiorImages.map((item) => (
                                  <div className="image" key={item}>
                                    <img src={item} alt={car.model} />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-4">
                    <div className="side-module specification-box">
                      <h3>Specification</h3>
                      <div className="inner">
                        <ul className="specification-list">
                          <li>
                            <span className="absolute">Make:</span> {car.make}
                          </li>
                          <li>
                            <span className="absolute">Model:</span> {car.model}
                          </li>
                          <li>
                            <span className="absolute">Type:</span>
                            {car.type}
                          </li>
                          <li>
                            <span className="absolute">Year:</span>
                            {car.year}
                          </li>
                          <li>
                            <span className="absolute">Color:</span>
                            {car.color}
                          </li>
                          <li>
                            <span className="absolute">Fuel Type:</span>
                            {car.fuelType}
                          </li>
                          <li>
                            <span className="absolute">Engine Size:</span>
                            {car.engineSize}
                          </li>
                          {/* < li >
                            <span className="absolute">Engine Power: </span>174 HP
                      </li> */}
                          <li>
                            <span className="absolute">Transmission:</span>
                            {car.transmission}
                          </li>
                          <li>
                            <span className="absolute">Mileage:</span>
                            {car.mileage}
                          </li>

                          {/* < li >
                            <span className="absolute">Exterior: </span>White
                          </li>
                          <li>
                            <span className="absolute">Interior: </span>Cream Tone
                          </li> */}

                          <li>
                            <span className="absolute">Condition: </span>
                            {car.condition}
                          </li>

                          <li className="price">
                            <span className="absolute">Price: </span>
                            {formatPrice(car.price)}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-30"></div>
                <div className="clear"></div>

                <div className="pro-con-wrapper">
                  <div className="GridLex-gap-30 mb-0">
                    <div className="GridLex-grid-noGutter-equalHeight">
                      <div className="GridLex-col-6_sm-6_xs-12">
                        <div className="pro-box">
                          <h4 className="text-success">Pros</h4>
                          <ul className="list-with-icon">
                            {car.pros.map((item) => (
                              <li key={item}>
                                <i className="fa fa-plus-circle text-success"></i>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="GridLex-col-6_sm-6_xs-12">
                        <div className="con-box">
                          <h4 className="text-warning">Cons</h4>
                          <ul className="list-with-icon">
                            {car.cons.map((item) => (
                              <li key={item}>
                                <i className="fa fa-minus-circle text-warning"></i>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="section-title">Full Specification</h3>
                <h4>{`${car.year} ${car.make} ${car.model}`}</h4>
                <p>{car.description}.</p>

                <h4>Car's Features</h4>

                <ul className="list-with-icon">
                  {car.features.map((item) => (
                    <li key={item}>
                      <i className="text-primary fa fa-check"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <CarSidebar />
          </div>

          <SimilarCars />

          <div className="mb-70"></div>
        </div>
      </div>

      <EnquiryModal
        name={`${car.make} ${car.model} ${car.year}`}
        image={car.exteriorImages[0]}
        description={car.description}
        price={car.price}
        itemId={car._id}
        type="car"
        condition={car.condition}
        mileage={car.mileage}
      />
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
