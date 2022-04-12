import React from 'react';
import FloatingWhatsApp from 'react-floating-whatsapp';
import constants from '../constants';

import { Footer, Header } from '../partials';

export default function MainLayout({ children }) {
  return (
    <div className="container-wrapper">
      <Header />
      {children}
      <FloatingWhatsApp phoneNumber={constants.phone} accountName="Classy Drive Nigeria" avatar="/images/logo.jpeg" />
      <Footer />
    </div>
  );
}
