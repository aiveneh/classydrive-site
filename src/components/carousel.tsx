import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel/lib/react-alice-carousel';
import { getAsset } from '../utils';

interface IProps {
  items: Array<any>;
  responsive: Record<string, any>;
  buttonsDisabled?: boolean;
}

export default function Carousel(props: IProps) {
  const { items, responsive } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideNext = () => setCurrentIndex((currentIndex + 1) % items.length);
  const slidePrev = () => setCurrentIndex((currentIndex - 1) % items.length);

  return (
    <>
      <AliceCarousel
        responsive={responsive}
        items={items}
        controlsStrategy={'responsive'}
        autoPlay={true}
        disableDotsControls={true}
        autoPlayInterval={3000}
        disableButtonsControls={true}
        activeIndex={currentIndex}
        infinite
      />

      {items.length > 1 && (
        <>
          <img
            className="custom-arrow-left"
            src={getAsset('images/carouselArrows/arrow-circle-left-solid.svg')}
            onClick={() => slidePrev()}
          />
          <img
            className="custom-arrow-right"
            src={getAsset('images/carouselArrows/arrow-circle-right-solid.svg')}
            onClick={() => slideNext()}
          />
        </>
      )}

      <style jsx>{`
        .custom-arrow-left,
        .custom-arrow-right {
          position: absolute;
          top: 40%;
          border-radius: 50%;
          border: 1px solid grey;
          -webkit-box-shadow: 0px 0px 34px 0px rgba(0, 0, 0, 0.56);
          box-shadow: 0px 0px 34px 0px rgba(0, 0, 0, 0.56);
          font-weight: bold;
          outline: none;
          height: 1.3em;
          width: 1.3em;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f3f3f3;
        }
        .custom-arrow-left {
          left: 10px;
        }
        .custom-arrow-right {
          right: 10px;
        }
        .custom-arrow-right:hover,
        .custom-arrow-left:hover {
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
