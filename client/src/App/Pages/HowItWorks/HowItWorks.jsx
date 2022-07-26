import React from 'react';
import PageHeader from '../../Components/PageHeader/PageHeader';
import FloatingLightningButton from '../../Components/FloatingLightningButton/FloatingLightningButton';
import HowItWorksContent from '../../Components/HowItWorksContent/HowItWorksContent';

function HowItWorks() {
  return (
    <>
      <FloatingLightningButton />
      <PageHeader pageName='How it works' />
      <HowItWorksContent />
    </>
  )
}

export default HowItWorks;