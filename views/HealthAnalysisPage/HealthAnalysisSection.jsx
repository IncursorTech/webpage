import { useState } from 'react';
import styled from 'styled-components';
import HumanBody from 'components/HumanBody';
import { Select, Stack, Input, VStack, Text, Checkbox, Button } from '@chakra-ui/react';
import { create } from 'utils/api';
import { media } from 'utils/media';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const options = ['one', 'two', 'three'];
const defaultOption = options[0];
export default function HealthAnalysisSection() {
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const saveHealthForm = () => {
        if (submitted) {
            return;
        }
        create('meta-healths', {
            name: 'test patient',
            age,
            height,
            weight,
        });
        setSubmitted(true);
    };
    return (<div className="container">
      <div className="row">
        <div className="col-md-4">
          <HumanBody />
        </div>
        <div className="col-md-8">
          <div className="row p-5">
            <div className="col-md-6">
              <VStack spacing={4} align="stretch">
                <Input placeholder="Adınız" h={'5rem'} border={'2px'}/>
                <Input placeholder="Telefon" h={'5rem'} border={'2px'}/>
                <Input placeholder="Yaş" h={'5rem'} border={'2px'}/>
                <Input placeholder="Boy" h={'5rem'} border={'2px'}/>
              </VStack>
            </div>

            <div className="col-md-6">
              <Stack spacing={4} align="stretch">
                <Input placeholder="Email" h={'5rem'} border={'2px'}/>
                <Input placeholder="Adres" h={'5rem'} border={'2px'}/>
                <Input placeholder="Kilo  " h={'5rem'} border={'2px'}/>
                <Select placeholder="Cinsiyet" h={'5rem'} bg={'#0E92D7'} border={'2px'} color={'white'} _hover={{
            bg: 'white',
            borderColor: '#0E92D7',
            color: '#0E92D7',
            fontWeight: '500',
        }}>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Stack>
            </div>
          </div>

          <div className="row p-5">
            <div className="col-md-6">
              <Stack spacing={4} align="stretch">
                <Select placeholder="Ülke" h={'5rem'} bg={'#0E92D7'} border={'2px'} color={'white'} _hover={{
            bg: 'white',
            borderColor: '#0E92D7',
            color: '#0E92D7',
            fontWeight: '500',
        }}>
                  <option value="option1">Türkiye</option>
                  <option value="option2">ABD</option>
                  <option value="option3">Yunanistan</option>
                </Select>
              </Stack>
            </div>
            <div className="col-md-6">
              <Stack spacing={4} align="stretch">
                <Select placeholder="Bölge" h={'5rem'} bg={'#0E92D7'} border={'2px'} color={'white'} _hover={{
            bg: 'white',
            borderColor: '#0E92D7',
            color: '#0E92D7',
            fontWeight: '500',
        }}>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Stack>
            </div>
          </div>
          <div className="row p-5">
            <Stack spacing={4} align="stretch">
              <Textarea placeholder="Açıklama" size="md"/>
              <Checkbox size="lg" m="2rem">
                <Text fontSize="md" ml="2rem" mt="2rem">
                  I agree to Wetraet Terms and Conditions, I have read the Privacy Policy and I agree that my given details including health
                  data may be processed by Wetreat for the purpose of obtaining quotes.
                </Text>
              </Checkbox>
              <Button colorScheme="blue" w={'%50'} h={'5rem'} w={'20%'}>
                Gönder
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>);
}
const InputStack = styled.div `
  display: flex;
  flex-direction: column;

  & > *:not(:first-child) {
    margin-top: 0.5rem;
  }
`;
const Textarea = styled(Input) `
  width: 100%;
  min-height: 20rem;
`;
const CustomDropdown = styled(Dropdown) `
  width: 50%;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: black;
`;
const CustomLabel = styled.label `
  font-size: 1.5rem;
  col-sm-12or: rgb(var(--text));
  margin-right: 1rem;
  margin-bottom: 1rem;

  ${media('<=desktop')} {
    font-size: 1.2rem;
  }
`;
