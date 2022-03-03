import React from 'react';

export function ErrorBanner({ message, reset }) {
  return (
    <div className="alert alert-danger alert-dismissible" role="alert">
      <button type="button" className="close" aria-label="Close" onClick={() => reset()}>
        <span aria-hidden="true">&times;</span>
      </button>

      <strong>Error !</strong>
      {message}
    </div>
  );
}

export function SuccessBanner({ message, reset }) {
  return (
    <div className="alert alert-success alert-dismissible" role="alert">
      <button type="button" className="close" aria-label="Close" onClick={() => reset()}>
        <span aria-hidden="true">&times;</span>
      </button>
      <strong>Success !</strong>
      {message}
    </div>
  );
}
