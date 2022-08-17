import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react';
import { PropsWithChildren, useState } from 'react';

interface AccordionProps {
  accordionItems: [];
}

export default function AccordionSystem({ accordionItems }: PropsWithChildren<AccordionProps>) {
  return (
    <>
      <Accordion defaultIndex={[0]} allowMultiple>
        {accordionItems.map((item, index) => (
          <AccordionItem>
            <h2>
              <AccordionButton
                bg={'#304F9B'}
                _hover={{
                  border: 'none',
                }}
              >
                <Box
                  flex="1"
                  textAlign="left"
                  minH={'5rem'}
                  textAlign="center"
                  fontSize="lg"
                  color={'black'}
                  fontWeight="500"
                  bg={'#304F9B'}
                >
                  {item.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel fontSize="md" color={'black'} px={'2rem'} bg={'#304F9B'} textAlign={'justify'}>
              {item.description}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
