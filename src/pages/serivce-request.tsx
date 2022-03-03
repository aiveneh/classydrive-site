import React from 'react';
import ServiceRequestForm from '../partials/serviceRequest';

export default function Contact() {
  return (
    <div className="main-wrapper scrollspy-container">
      <div className="bg-primary section">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
              <div className="section-title text-center mb-0">
                <h2>Free Car Diagnosis</h2>
                <p>Service your cars with a rest of mind.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container container-outer">
          <div className="row">
            <div className="col-xss-12 col-xs-6 col-sm-12 col-md-5 mb-30-xss">
              <ServiceRequestForm />
            </div>

            <div className="col-xss-12 col-xs-6 col-sm-12 col-md-7 mb-30-xss">
              <div className="row mt-70 mb-50">
                <div className="col-md-4 col-xss-4 col-xs-4 text-center">
                  <img src="/icons/car-wash.png" className="p-50" />
                  <p className="w-600">Lorem Ipsum</p>
                </div>

                <div className="col-md-4 col-xss-4 col-xs-4 text-center">
                  <img src="/icons/tire-pressure.png" className="p-50" />
                  <p className="w-600">Lorem Ipsum</p>
                </div>

                <div className="col-md-4 col-xss-4 col-xs-4 text-center">
                  <img src="/icons/car.png" className="p-50" />
                  <p className="w-600">Lorem Ipsum</p>
                </div>
              </div>

              <div className="row p-50">
                <h3 className="heading mt-0">More Than Car Dealers</h3>

                <p>
                  Unpleasant astonished an diminution up partiality. Noisy an their of meant. Death means up civil do an
                  offer wound of. Called square an in afraid direct. Resolution diminution conviction so mr at
                  unpleasing simplicity no. No it as breakfast up conveying earnestly immediate principle. Him son
                  disposed produced humoured overcame she bachelor improved. Studied however out wishing but inhabit
                  fortune windows.
                </p>
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
