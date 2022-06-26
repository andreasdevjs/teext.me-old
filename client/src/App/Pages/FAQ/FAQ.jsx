import React from 'react';
import PageHeader from '../../Components/PageHeader/PageHeader';
import FloatingLightningButton from '../../Components/FloatingLightningButton/FloatingLightningButton';
import FaqQuestions from '../../Components/FaqQuestions/FaqQuestions';
import Footer from '../../Components/Footer/Footer';

function FAQ() {
  return (
    <React.Fragment>
      <FloatingLightningButton />
      <PageHeader pageName='Frequent Questions' />
      <FaqQuestions />
      <Footer />
    </React.Fragment>
  );
}

export default FAQ;
