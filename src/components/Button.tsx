import React, { Fragment } from 'react';

interface IProps {
  text: string;
  type?: 'submit' | 'reset' | 'button';
  isSubmitting: boolean;
}

export default function Button(props: IProps) {
  const { type, text, isSubmitting } = props;

  return (
    <button
      type={type || 'submit'}
      disabled={isSubmitting}
      className="btn btn-block next-btn"
      style={{ marginRight: '6px', width: '130px' }}
    >
      {isSubmitting ? (
        <Fragment>
          <i className="fa fa-circle-o-notch fa-spin" style={{ marginRight: 10 }} />
          Loading...
        </Fragment>
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
}
