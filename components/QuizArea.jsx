import { ArrowBackIcon, ArrowForwardIcon, CheckIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, HStack, Input, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import { Radio, RadioGroup } from '@chakra-ui/react';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import Image from 'next/image';
import NextLink from 'next/link';
import Questions from 'public/data/questions.json';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import WelcomeArea from '../components/WelcomeArea';

export default function QuizArea({ onFinish }) {
  const { meta, questions } = Questions;
  const [pageNum, setPageNum] = useState(0);
  const [answers, setAnswers] = useState(new Array(meta.length).fill(-1));

  const handleAnswer = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  return (
    <Flex p={5} minH={'60vh'} align={'center'} justify={'center'}>
      <Stack spacing={6} p={8} rounded={'3xl'} bg={'#f5f5f5'} shadow={'xl'} textAlign={'center'} w={{ base: '40vw', md: '80vw' }}>
        <Stack minH={'md'} minW={{ base: 'auto', md: 'xl' }}>
          {questions[pageNum].map((item) => (
            <Stack
              background={'gray.100'}
              key={item.id}
              p={4}
              rounded={'2xl'}
              border={'1px'}
              direction={{ base: 'column', md: 'row' }}
              borderColor={'gray.300'}
              fontSize={'xl'}
              fontWeight={'bold'}
            >
              <Text width={'100%'} textAlign={'left'} pb={{ base: 15, md: 0 }}>
                {item.question}
              </Text>
              <Flex justifyContent={{ base: 'center', md: 'flex-end' }} spacing={5} pb={{ base: 15, md: 0 }}>
                <Flex gap={5} align={'center'} justify={'center'}>
                  <Button
                    id={item.id + 'y'}
                    height={'3rem'}
                    w={'5rem'}
                    size={'xl'}
                    colorScheme="green"
                    value={item.class}
                    onClick={() => {
                      handleAnswer(item.id, 1);
                    }}
                  >
                    Evet
                  </Button>
                  <Button
                    id={item.id + 'n'}
                    height={'3rem'}
                    w={'5rem'}
                    size={'xl'}
                    colorScheme="red"
                    value={item.class}
                    onClick={() => {
                      handleAnswer(item.id, 0);
                    }}
                  >
                    Hayır
                  </Button>
                </Flex>
              </Flex>
            </Stack>
          ))}
        </Stack>

        <HStack justifyContent={'center'}>
          <Button
            h={'4rem'}
            size={'lg'}
            colorScheme={'orange'}
            leftIcon={<ArrowBackIcon />}
            isDisabled={pageNum === 0}
            onClick={() => {
              setPageNum(pageNum - 1);
            }}
          ></Button>
          <Button
            h={'4rem'}
            size={'lg'}
            colorScheme={'orange'}
            rightIcon={<ArrowForwardIcon />}
            onClick={() => {
              pageNum < questions.length ? setPageNum(pageNum + 1) : onFinish(answers);
            }}
          ></Button>
        </HStack>
      </Stack>
    </Flex>
  );
}
