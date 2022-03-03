import React from 'react';

import CarSearch from './carSearch';
import Quickinfo from './quickInfo';

export default function CarSidebar() {
  return (
    <div className="col-xs-12 col-sm-4 col-md-3">
      <aside className="sidebar-wrapper">
        <CarSearch />
        {/* <RecentlyViewedCars /> */}
        <Quickinfo />
      </aside>
    </div>
  );
}
