import React from 'react';

export default function NotFound() {
  return (
    <div className="main-wrapper scrollspy-container" style={{ overflowX: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center', marginTop: '50px', marginBottom: '50px' }}>
        <div className="page-error-wrapper">
          <div>
            <h1 className="error-title">404</h1>
            <h5 className="tx-sm-24 tx-normal">Oopps. The page you were looking for doesn't exist.</h5>
            <p className="mg-b-50">You may have mistyped the address or the page may have moved.</p>
            <p className="mg-b-50">
              <a href="/" className="btn btn-error">
                Back to Home
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
