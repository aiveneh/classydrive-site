import React from 'react';
import { routes } from '../routes';

interface IProps {
  name: string;
  description: string;
  className: string;
}

export default function ServiceItem(props: IProps) {
  const { name, description, className } = props;

  return (
    <div className="col-sm-4">
      <div className="featured-header-most-top">
        <h5>
          <span>{name}</span>
        </h5>

        <div className="icon">
          <i className={className}></i>
        </div>

        <p>{description}</p>

        <a href={routes.serviceRequest.path} className="btn btn-primary">
          Book free service
        </a>
      </div>
    </div>
  );
}
