import { CheckIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Divider,
  List,
  ListIcon,
  ListItem,
  Stack,
  StackDivider,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import TreatmentInfoModal from './TreatmentInfoModal';

import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

type Props = {
  features?: Features;
  priceText?: string;
  priceTag?: string;
  priceUnit?: string;
  nextButtonArea: () => JSX.Element;
};

export interface Features {
  name: string;
  details: Detail[];
}

export interface Detail {
  key: string;
  text: string;
  values: string[];
}

export default function TreatmentPriceSummary({ features, priceText, priceTag, nextButtonArea }: Props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const modalContent = (
    <TableContainer>
      <Table size="lg">
        <div>
          <Document file="http://www.africau.edu/images/default/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      </Table>
    </TableContainer>
  );

  return (
    <Center py={6}>
      <Box
        maxW={'330px'}
        w={'full'}
        bg={'linear-gradient(150deg,rgba(9,160,240,1) 0%,rgba(34,77,156,1) 100%)'}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Stack textAlign={'center'} p={6} color={useColorModeValue('gray.800', 'white')} align={'center'}>
          <Stack direction={'row'} align={'center'} justify={'center'} pb={'2rem'}>
            {nextButtonArea()}
          </Stack>
          <Text
            fontSize={'md'}
            fontWeight={500}
            p={2}
            px={3}
            color={'white'}
            border="2px"
            borderColor={'rgba(255,255,255,0.4)'}
            rounded={'md'}
          >
            Your Plan
          </Text>

          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'5xl'} fontWeight={800} color={'white'}>
              {priceText}
            </Text>
            {priceTag && <Text color={'white'}>/{priceTag}</Text>}
          </Stack>
        </Stack>

        <Box px={6} py={10}>
          <>
            {features?.name &&
              features.details.map((detail, index) => (
                <div key={index}>
                  <Stack isInline spacing={2} align={'center'} justify={'space-between'}>
                    <Text fontSize={'md'} fontWeight={700} my={6} color={'white'}>
                      {detail.text}
                    </Text>
                    {detail.text === 'Service details' && (
                      <TreatmentInfoModal
                        buttonText={'Get Info'}
                        title={`${features.details[0].values[1]} Information`}
                        content={modalContent}
                        closeButtonText="Close"
                      />
                    )}
                  </Stack>
                  <List spacing={3} textAlign={'start'} px={12}>
                    {detail.values?.map((value, index) => (
                      <ListItem key={index} color={'white'} fontSize={'sm'}>
                        <ListIcon as={CheckIcon} color={'green.300'} />
                        {value}
                      </ListItem>
                    ))}
                  </List>
                  <Divider my={8} color="black" />
                </div>
              ))}
          </>
        </Box>
      </Box>
    </Center>
  );
}
