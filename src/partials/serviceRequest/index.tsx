import React, { useState } from 'react';

import UserDetails from './userDetails';
import VehicleDetails from './vehicleDetails';

export default function CreateServiceRequest() {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({});

  const nextStep = (data) => {
    setValues({ ...values, ...data });
    setStep(step + 1);
  };

  const previousStep = () => setStep(step - 1);

  switch (step) {
    case 1:
      return <VehicleDetails next={nextStep} />;
    case 2:
      return <UserDetails previous={previousStep} values={values} />;
    default:
      return <p>Data not ready</p>;
  }
}
