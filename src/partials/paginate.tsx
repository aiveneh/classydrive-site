import React from 'react';

export default function Paginate() {
  return (
    <div className="paging-wrapper clearfix">
      <nav className="paging-center">
        <ul className="paging mb-0">
          <li className="disabled">
            <a href="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </a>
          </li>
          <li className="active">
            <a href="#">1</a>
          </li>
          {/* <li><a href="#">2</a></li> */}
          <li>
            <a href="#" aria-label="Next">
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
