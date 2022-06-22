import React from 'react';
import PageHeader from '../../Components/PageHeader/PageHeader';
import FloatingLightningButton from '../../Components/FloatingLightningButton/FloatingLightningButton';
import FaqQuestions from '../../Components/FaqQuestions/FaqQuestions';

function FAQ() {
  return (
    <React.Fragment>
      <FloatingLightningButton />
      <PageHeader pageName='Frequent Questions' />
      <FaqQuestions />
    </React.Fragment>
  );
}

export default FAQ;
