import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
export default function AccordionSystem({ accordionItems }) {
  return (
    <>
      <Accordion defaultIndex={[0]} allowMultiple>
        {accordionItems.map((item, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton
                bg={'#304F9B'}
                _hover={{
                  border: 'none',
                }}
              >
                <Box flex="1" textAlign="left" minH={'5rem'} fontSize="lg" color={'black'} fontWeight="500" bg={'#304F9B'}>
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
