import React from 'react';
import { Box, Accordion, AccordionItem, AccordionIcon, AccordionButton, AccordionPanel, Text } from '@chakra-ui/react';

import { questions } from './allFaqQuestions';

export default function FaqQuestions() {
  return (
    <Box mt='100px' maxWidth='800px' margin='20px auto' padding={5}>
      <Accordion allowMultiple>
        {
          questions.map(faq => {
            return (
              <AccordionItem mb={2} borderRadius='5px' border='1px solid #f8f8f8' key={faq.id}>
                <h2>
                  <AccordionButton height='50px' _focus='none' borderRadius='5px' _expanded={{ bg: '#0c0d13', color: 'white', borderRadius: '5px' }}>
                    <Box flex='1' textAlign='left'>
                      <Text fontFamily='GilroyBold' fontWeight='bold'>{faq.question}</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {faq.answer}
                </AccordionPanel>
              </AccordionItem>
            )
          })
        }
      </Accordion>
    </Box>
  );
}
