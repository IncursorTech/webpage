import { ArrowBackIcon, ArrowForwardIcon, CheckIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, HStack, Input, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import { Radio, RadioGroup } from '@chakra-ui/react';
import axios from 'axios';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import Image from 'next/image';
import NextLink from 'next/link';
import Countries from 'public/data/countries.json';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import QuizArea from '../components/QuizArea';
import WelcomeArea from '../components/WelcomeArea';

export default function FormArea() {
  const { countries } = Countries;
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [classNumber, setClassNumber] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  const validateForm = () => {
    // Validate the name
    if (name.length > 0) {
      const nameRegex = /[a-zA-Z]+(?:(?:\. |[' ])[a-zA-Z]+)*/;
      if (!nameRegex.test(name)) {
        alert('Please enter a valid name');
        return;
      }
    } else {
      alert('Name cannot be empty');
      return;
    }

    // Validate the surname
    if (surname.length > 0) {
      const surnameRegex = /[a-zA-Z]+(?:(?:\. |[' ])[a-zA-Z]+)*/;
      if (!surnameRegex.test(surname)) {
        alert('Please enter a valid surname');
        return;
      }
    } else {
      alert('Surname cannot be empty');
      return;
    }

    // Validate the email
    if (email.length > 0) {
      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
      }
    } else {
      alert('Email address cannot be empty');
      return;
    }
    if (classNumber < 1) {
      alert('Lütfen Sınıfınızı Seçiniz');
      return;
    }
    // Check Agreement
    if (!isAgreed) {
      alert('Please accept the agreement');
      return;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      axios.post('/api/form', { name, surname, email, country, classNumber }).then((res) => {
        if (res.status === 200) {
          alert('Form submitted successfully');
        }
      });
    }
  };

  return (
    <>
      <Text width={'100%'} px={5} fontSize={'2xl'} color={'gray.600'} textTransform={'capitalize'} textAlign={'center'}>
        Teşekkürler Testi Tamamladınız <br></br> Kontrollerinizide Tamamladıysanız Testinizin Sonucunu Görmek İçin Aşağıdaki Bilgileri
        Doldurup <br></br> <b> Gönder </b> Butonuna Basınız.
      </Text>
      <Box px={{ base: '1rem' }}>
        <SimpleGrid columns={2} gap={5}>
          <Input h={'5rem'} size={'lg'} placeholder="Adınız" onChange={(e) => setName(e.target.value)} />
          <Input h={'5rem'} size={'lg'} placeholder="Soyadınız" onChange={(e) => setSurname(e.target.value)} />
          <Input h={'5rem'} size={'lg'} placeholder="Mail" onChange={(e) => setEmail(e.target.value)} />
          <Select h={'5rem'} size={'lg'} placeholder="Bölge" onChange={(event) => setClassNumber(+event.target.value)}>
            {countries.map((item, index) => (
              <option key={index} value={item.plaka}>
                {item.il_adi}
              </option>
            ))}
          </Select>
          <RadioGroup onChange={setGender} value={gender}>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={5} pt={5} justifyContent={'left'}>
              <Text fontSize={'lg'}>Cinsiyet :</Text>
              <Stack direction={'row'}>
                <Radio size={'lg'} value="M">
                  Kız
                </Radio>
                <Radio size={'lg'} value="F">
                  Erkek
                </Radio>
              </Stack>
            </Stack>
          </RadioGroup>
        </SimpleGrid>
        {/* <Pie data={dataPie} /> */}
      </Box>
      <Button h={'5rem'} size={'lg'} colorScheme={'orange'} rightIcon={<CheckIcon />} isDisabled={!isAgreed} onClick={handleSubmit}>
        Gönder
      </Button>
    </>
  );
}
