import React, { Fragment } from 'react';
import Link from 'next/link';

import { Carousel } from '../components';

export default function Slider({ data }) {
  if (data.length > 0) {
    return (
      <div className="slider_area" style={{ position: 'relative' }}>
        <Carousel
          responsive={{ 0: { items: 1 } }}
          items={data.map((slider: any) => {
            return (
              <div key={slider._id} className="single_slider sliderrr" style={{ background: `url(${slider.src})` }}>
                <div className="container-fluid p-0">
                  <div className="row align-items-center">
                    <div className="col-12">
                      <div className="slider_content">
                        <h4>{slider.subTitle}</h4>
                        <h1>{slider.title}</h1>
                        <Link href="#">
                          <a href="#" style={{ fontSize: '18px' }}>
                            {slider.pathText}
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        />
      </div>
    );
  } else {
    return <Fragment></Fragment>;
  }
}
