import React from 'react';

import { Footer, Header } from '../partials';

export default function MainLayout({ children }) {
  return (
    <div className="container-wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
