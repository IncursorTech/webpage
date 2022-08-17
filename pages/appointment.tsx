import { Box, Button, Container, Heading, Input, SimpleGrid, Text } from '@chakra-ui/react';
// import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import Footer from 'components/FooterChakra';
import Header from 'components/Header';
import SearchSideBar from 'components/SearchSideBar';
import DatePicker, { Calendar, DayValue, DayRange, Day } from 'react-modern-calendar-datepicker';

import { useDispatch } from 'react-redux';
import { setNavbarStatic } from 'store/navbarSlice';
import styled from 'styled-components';
import { SearchSideProps } from 'types';
import CustomContainer from 'components/CustomContainer';
import { useCookies } from 'react-cookie';
import Router, { useRouter } from 'next/router';
import { save } from 'utils/api';
import WaveCta from 'components/WaveCta';

type Props = {};

const defaultValue = {
  year: 2022,
  month: 8,
  day: 10,
};

const disabledDates = [
  {
    year: 2022,
    month: 8,
    day: 20,
  },
  {
    year: 2022,
    month: 8,
    day: 21,
  },
  {
    year: 2022,
    month: 8,
    day: 7,
  },
];

// Array of busy hours of day
const timeSlots = [
  '07:00',
  '07:30',
  '08:00',
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
  '21:30',
  '22:00',
  '22:30',
  '23:00',
  '23:30',
];

const busyHours = ['14:00', '17:30'];

const PageDescription: SearchSideProps = {
  header: 'Find a Doctor',
  title: 'The Best Doctors in Turkey',
  description: `Many people living in different parts of the world say that the best doctors in the world live in Turkey has been mentioned with the
  names and achievements of many Turkish doctors in the field of international health in recent years. Turkish doctors continue to
  write their names in the history of health with their studies, successful operations and discoveries around the world and in Turkey.
  We have compiled for you the Turkish doctors who are impressive with their achievements and who have achieved great success in the
  field of health. Before we start our list, we would like to make a small note. We could only include a limited number of Turkish
  doctors in this list. Unfortunately, our page is not enough to explain theof Turkish doctors beyond the borders of the country.`,
};

const Appointment = (props: Props) => {
  const dispatch = useDispatch();
  dispatch(setNavbarStatic(false));

  const [userCookie, setUserCookie] = useCookies(['user']);

  const [selectedTime, setSelectedTime] = useState(timeSlots[0]);
  const [selectedDate, setSelectedDate] = useState(defaultValue);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(timeSlots[0]);
  const [selectedTimeSlotIndex, setSelectedTimeSlotIndex] = useState(0);

  const handleDisabledSelect = (disabledDay: DayValue) => {
    console.log('Tried selecting a disabled day', disabledDay);
  };

  const saveAppointment = () => {
    console.log(userCookie);

    const planDetails = localStorage.getItem('planDetails');

    save('/appointments', {
      userId: userCookie?.user?.id || '',
      appointment: {
        date: selectedDate,
        time: selectedTime,
      },
      planDetails: planDetails ? JSON.parse(planDetails) : {},
    })
      .then((res) => {
        Router.push('/appointment-success');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Background>
      <Header title="Appoıntment" imgURL="page/doctors.jpg" />

      <InsideContainer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9">
              <ContentContainer>
                <div className="row">
                  <Box>
                    <Heading mb={4}>Schedule appointment with your doctor</Heading>
                    <Text fontSize="xl">
                      One more step you should make for your healtier life. Schedule your appointment and let call our doctor you
                    </Text>
                  </Box>
                </div>
                <div className="row">
                  <Box my={24} m>
                    <div className="row">
                      <div className="col-md-4">
                        <Box mx={4}>
                          <Calendar
                            value={selectedDate}
                            onChange={setSelectedDate}
                            disabledDays={disabledDates} // here we pass them
                            onDisabledDayError={handleDisabledSelect} // handle error
                            shouldHighlightWeekends
                            shouldHighlightToday
                            colorPrimary="#48BB78"
                          />
                        </Box>
                      </div>
                      <div className="col-md-8">
                        <SimpleGrid columns={4} spacing={2} p={4}>
                          {timeSlots.map((time, index) => (
                            <Button
                              key={index}
                              // colorScheme={selectedTimeSlotIndex === index ? 'teal' : 'teal'}
                              bg={selectedTimeSlotIndex === index ? 'green.400' : 'white'}
                              color={selectedTimeSlotIndex === index ? 'white' : 'black'}
                              shadow="lg"
                              size="lg"
                              onClick={() => {
                                setSelectedTimeSlot(time);
                                setSelectedTimeSlotIndex(index);
                              }}
                              isDisabled={busyHours.includes(time)}
                            >
                              {time}
                            </Button>
                          ))}
                        </SimpleGrid>
                      </div>
                    </div>
                  </Box>
                </div>
              </ContentContainer>
            </div>
            <div className="col-md-3">
              <LeftContentContainer>
                <div className="row">
                  <Heading color={'white'}>Appointment Details</Heading>
                </div>
                <Box mt={24}>
                  <div className="row">
                    <div className="col-md-4">
                      <Text fontSize="xl">
                        <strong>Date: </strong>
                      </Text>
                    </div>
                    <div className="col-md-8">
                      <Text fontSize="xl">{selectedTimeSlot}</Text>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <Text fontSize="xl">
                        <strong>Time: </strong>
                      </Text>
                    </div>
                    <div className="col-md-8">
                      <Text fontSize="xl">
                        {selectedDate.day} {selectedDate.month} {selectedDate.year}
                      </Text>
                    </div>
                  </div>
                </Box>
                <Box bottom={0}>
                  <Button
                    mt={'2rem'}
                    p={8}
                    w={'full'}
                    h={'full'}
                    bg={'green.400'}
                    color={'white'}
                    rounded={'xl'}
                    boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                    onClick={() => {
                      saveAppointment();
                    }}
                    _hover={{
                      bg: 'green.500',
                    }}
                    _focus={{
                      bg: 'green.500',
                    }}
                  >
                    Confirm Treatment Plan
                  </Button>
                </Box>
              </LeftContentContainer>
            </div>
          </div>
        </div>
      </InsideContainer>
      <WaveCta />
      <Footer />
    </Background>
  );
};

export default Appointment;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home', 'navbar', 'countries'])),
      // Will be passed to the page component as props
    },
  };
}

const InsideContainer = styled(CustomContainer)`
  max-width: 190em;
  margin-top: -150px;
  margin-bottom: 8rem;
`;

const ContentContainer = styled.div`
  background-color: white;
  padding: 4rem;
`;

const Background = styled.div`
  background-color: #edeff3;
`;

const LeftContentContainer = styled(CustomContainer)`
  padding: 5rem;
  width: 100%;
  height: 100%;
  background: linear-gradient(150deg, rgba(9, 160, 240, 1) 0%, rgba(34, 77, 156, 1) 100%);
  color: white;
`;
