import { Box, Button, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import Container from 'components/CustomContainer';
import Footer from 'components/FooterChakra';
import Header from 'components/Header';
import TreatmentPlanningForm from 'components/TreatmentPlanningForm';
import TreatmentPricesComparison from 'components/TreatmentPricesComparison';
import TreatmentPriceSummary from 'components/TreatmentPriceSummary';
import WaveCta from 'components/WaveCta';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setNavbarStatic } from 'store/navbarSlice';
import styled from 'styled-components';
const steps = [
    { label: 'Choose Services', description: 'Please select a treatment method and travel details' },
    { label: 'Select City', description: 'Get cost estimate about treatment, accommodation, aftercare and more.' },
    // {
    //   label: 'Arrange Treatment Date',
    //   description: 'Click next button and fill in the contract form in order to receive exact amount of cost',
    // },
    // { label: 'Safe & Healthy back home', description: 'We make sure you return home safe and healthy' },
];
// ONLY FOR DEMO PURPOSE
const treatments = {
    us: {
        meta: {
            prices: {
                treatment: {
                    min: 3100,
                    max: 6900,
                },
                transportation: {
                    min: 800,
                    max: 1900,
                },
                accommodation: {
                    min: 1100,
                    max: 1900,
                },
                insurance: {
                    min: 1200,
                    max: 1600,
                },
                aftercare: {
                    min: 700,
                    max: 1500,
                },
            },
        },
        cities: [
            {
                code: 'us-ny',
                name: 'New York',
                currency: 'USD',
                isMostPopular: false,
                services: {
                    treatment: {
                        price: 1300,
                    },
                    transportation: {
                        price: 300,
                    },
                    accommodation: {
                        price: 200,
                    },
                    insurance: {
                        price: 100,
                    },
                    aftercare: {
                        price: 100,
                    },
                },
                features: [
                    {
                        key: 'treatment',
                        name: 'Transport',
                        icon: FaCheckCircle,
                        description: 'Transport to and from the city',
                    },
                    {
                        key: 'accommodation',
                        name: 'Accommodation',
                        icon: FaCheckCircle,
                        description: 'Accommodation in the city',
                    },
                    {
                        key: 'insurance',
                        name: 'Insurance',
                        icon: FaCheckCircle,
                        description: 'Insurance in the city',
                    },
                ],
            },
            {
                code: 'us-la',
                name: 'Los Angeles',
                currency: 'USD',
                isMostPopular: true,
                services: {
                    treatment: {
                        price: 900,
                    },
                    transportation: {
                        price: 500,
                    },
                    accommodation: {
                        price: 300,
                    },
                    insurance: {
                        price: 700,
                    },
                    aftercare: {
                        price: 900,
                    },
                },
                features: [
                    {
                        key: 'treatment',
                        name: 'Transport',
                        icon: FaCheckCircle,
                        description: 'Transport to and from the city',
                    },
                    {
                        key: 'accommodation',
                        name: 'Accommodation',
                        icon: FaCheckCircle,
                        description: 'Accommodation in the city',
                    },
                    {
                        key: 'insurance',
                        name: 'Insurance',
                        icon: FaCheckCircle,
                        description: 'Insurance in the city',
                    },
                ],
            },
            {
                code: 'us-sf',
                name: 'Chicago',
                currency: 'USD',
                isMostPopular: false,
                services: {
                    treatment: {
                        price: 1100,
                    },
                    transportation: {
                        price: 100,
                    },
                    accommodation: {
                        price: 700,
                    },
                    insurance: {
                        price: 500,
                    },
                    aftercare: {
                        price: 100,
                    },
                },
                features: [
                    {
                        id: 1,
                        name: 'Transport',
                        icon: FaCheckCircle,
                        description: 'Transport to and from the city',
                    },
                    {
                        id: 2,
                        name: 'Accommodation',
                        icon: FaCheckCircle,
                        description: 'Accommodation in the city',
                    },
                    {
                        id: 3,
                        name: 'Insurance',
                        icon: FaCheckCircle,
                        description: 'Insurance in the city',
                    },
                ],
            },
        ],
    },
    tr: {
        meta: {
            prices: {
                treatment: {
                    min: 1100,
                    max: 3900,
                },
                transportation: {
                    min: 100,
                    max: 900,
                },
                accommodation: {
                    min: 200,
                    max: 600,
                },
                insurance: {
                    min: 400,
                    max: 900,
                },
                aftercare: {
                    min: 600,
                    max: 700,
                },
            },
        },
        cities: [
            {
                code: 'tr-istanbul',
                name: 'İstanbul',
                currency: 'TRY',
                isMostPopular: true,
                services: {
                    treatment: {
                        price: 660,
                    },
                    transportation: {
                        price: 110,
                    },
                    accommodation: {
                        price: 220,
                    },
                    insurance: {
                        price: 110,
                    },
                    aftercare: {
                        price: 120,
                    },
                },
                features: [
                    {
                        id: 1,
                        name: 'Transport',
                        icon: FaCheckCircle,
                        description: 'Transport to and from the city',
                    },
                    {
                        id: 2,
                        name: 'Accommodation',
                        icon: FaCheckCircle,
                        description: 'Accommodation in the city',
                    },
                    {
                        id: 3,
                        name: 'Insurance',
                        icon: FaCheckCircle,
                        description: 'Insurance in the city',
                    },
                ],
            },
            {
                code: 'tr-izmir',
                name: 'İzmir',
                currency: 'TRY',
                isMostPopular: true,
                services: {
                    treatment: {
                        price: 700,
                    },
                    transportation: {
                        price: 300,
                    },
                    accommodation: {
                        price: 260,
                    },
                    insurance: {
                        price: 130,
                    },
                    aftercare: {
                        price: 200,
                    },
                },
                features: [
                    {
                        id: 1,
                        name: 'Transport',
                        icon: FaCheckCircle,
                        description: 'Transport to and from the city',
                    },
                    {
                        id: 2,
                        name: 'Accommodation',
                        icon: FaCheckCircle,
                        description: 'Accommodation in the city',
                    },
                    {
                        id: 3,
                        name: 'Insurance',
                        icon: FaCheckCircle,
                        description: 'Insurance in the city',
                    },
                ],
            },
            {
                code: 'tr-adana',
                name: 'Adana',
                currency: 'TRY',
                isMostPopular: false,
                services: {
                    treatment: {
                        price: 540,
                    },
                    transportation: {
                        price: 370,
                    },
                    accommodation: {
                        price: 270,
                    },
                    insurance: {
                        price: 140,
                    },
                    aftercare: {
                        price: 150,
                    },
                },
                features: [
                    {
                        id: 1,
                        name: 'Transport',
                        icon: FaCheckCircle,
                        description: 'Transport to and from the city',
                    },
                    {
                        id: 2,
                        name: 'Accommodation',
                        icon: FaCheckCircle,
                        description: 'Accommodation in the city',
                    },
                    {
                        id: 3,
                        name: 'Insurance',
                        icon: FaCheckCircle,
                        description: 'Insurance in the city',
                    },
                ],
            },
        ],
    },
};
const Countries = [
    {
        id: '62e685f180efd589da9d1e8e',
        name: 'United States',
        code: 'us',
        Cities: [
            {
                name: 'New York',
                code: 'newyork',
                id: '62e685f1d3a8f5612c90ccc1',
            },
            {
                name: 'Los Angeles',
                code: 'losangeles',
                id: '62e685f1d3a8f5612c90ccc2',
            },
            {
                name: 'Miami',
                code: 'miami',
                id: '62e685f1d3a8f5612c90ccc3',
            },
            {
                name: 'Chicago',
                code: 'chicago',
                id: '62e685f1d3a8f5612c90ccc4',
            },
        ],
        createdAt: '2022-07-31T13:38:57.353Z',
        updatedAt: '2022-07-31T13:38:57.353Z',
    },
    {
        id: '62e684c180efd589da9d1e74',
        name: 'Turkey',
        code: 'tr',
        Cities: [
            {
                name: 'Istanbul',
                code: 'istanbul',
                id: '62e684c1d3a8f5612c90ccbe',
            },
            {
                name: 'Adana',
                code: 'adana',
                id: '62e684c1d3a8f5612c90ccbf',
            },
            {
                name: 'Ankara',
                code: 'ankara',
                id: '62e684c1d3a8f5612c90ccc0',
            },
        ],
        createdAt: '2022-07-31T13:33:53.053Z',
        updatedAt: '2022-07-31T13:39:20.406Z',
    },
];
const Services = [
    {
        id: '62e69035a08f6c62410768dc',
        name: 'Eye Disease Surgery',
        surgeryPackages: [
            {
                name: 'Rectus Recession and Resection',
                price: 100,
            },
            {
                name: 'Lasik Eye Surgery',
                price: 100,
            },
            {
                name: 'Vitrectomy, Pars plana (PPV)',
                price: 100,
            },
            {
                name: 'Complicated Vitrectomy, Double Eye Surgery',
                price: 100,
            },
            {
                name: 'Complicated Vitrectomy, One eye Surgery',
                price: 100,
            },
            {
                name: 'Vitrectomy, Double Eye Surgery',
                price: 100,
            },
            {
                name: 'Vitrectomy, One Eye Surgery',
                price: 100,
            },
            {
                name: 'Complex Cataract, Double Eye',
                price: 100,
            },
            {
                name: 'Complex Cataract, One Eye Surgery ',
                price: 100,
            },
            {
                name: 'Keratoplasty Surgery',
                price: 100,
            },
            {
                name: 'Cataract, Double Eye Surgery ',
                price: 100,
            },
            {
                name: 'Cataracts, One Eye Surgery',
                price: 100,
            },
            {
                name: 'Evisceration (Except Prosthesis) Surgery',
                price: 100,
            },
            {
                name: 'Detachment Surgeries Surgery',
                price: 100,
            },
            {
                name: 'Rectus Recession and Resection, bilateral Surgery',
                price: 100,
            },
            {
                name: 'Corneal Cross-Linking Application one eye Surgery',
                price: 100,
            },
            {
                name: 'Corneal Cross-Linking Application double eye Surgery',
                price: 100,
            },
            {
                name: 'Argon Laser (Single session) Surgery',
                price: 100,
            },
            {
                name: 'Right and Left eye general anesthesia and secondary lens',
                price: 100,
            },
            {
                name: 'Eylea Injection, 2 Doses (including medication) Surgery',
                price: 100,
            },
        ],
        code: 'EyeDiseaseSurgery',
        createdAt: '2022-07-31T14:22:45.493Z',
        updatedAt: '2022-07-31T15:51:36.092Z',
        prices: 100,
        price: 100,
    },
    {
        id: '62e69020a08f6c62410768c6',
        name: 'Cardiology Surgery',
        code: 'CardiologySurgery',
        createdAt: '2022-07-31T14:22:24.479Z',
        updatedAt: '2022-07-31T15:51:40.727Z',
        surgeryPackages: [
            {
                name: 'Surgey',
                price: 100,
            },
        ],
        prices: 200,
        price: 200,
    },
    {
        id: '62e6900da08f6c62410768ad',
        name: ' Breast Augmentation Surgery',
        code: 'BreastAugmentationSurgery',
        createdAt: '2022-07-31T14:22:05.167Z',
        updatedAt: '2022-07-31T15:51:45.351Z',
        surgeryPackages: [
            {
                name: 'Surgey',
                price: 100,
            },
        ],
        prices: 300,
        price: 300,
    },
];
function PlanTreatment() {
    const [countries, setCountries] = useState([]);
    const [services, setServices] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState();
    const [selectedCity, setSelectedCity] = useState();
    const [summary, setSummary] = useState();
    const [nextButtonStatus, setNextButtonStatus] = useState(false);
    const [selectedService, setSelectedService] = useState();
    const [selectedSurgery, setSelectedSurgery] = useState();
    const [durationSliderValue, setDurationSliderValue] = useState(1);
    const [travelersSliderValue, setTravelersSliderValue] = useState(1);
    const [estimatedPrice, setEstimatedPrice] = useState({ min: 0, max: 0 });
    const [dateTime, setDateTime] = useState(new Date());
    const [transportSelected, setTransportSelected] = useState(false);
    const [accommodationSelected, setAccommodationSelected] = useState(false);
    const [insuranceSelected, setInsuranceSelected] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();
    dispatch(setNavbarStatic(false));
    const { nextStep, prevStep, reset, activeStep } = useSteps({
        initialStep: 0,
    });
    useEffect(() => {
        // getAll('countries').then((res) => {
        //   setCountries(res.docs);
        // });
        setCountries(Countries);
    }, []);
    useEffect(() => {
        // getAll('services').then((res) => {
        //   setServices(res.docs);
        // });
        setServices(Services);
    }, []);
    useEffect(() => {
        if (selectedCountry && selectedService) {
            const country = selectedCountry;
            const service = selectedService;
            const duration = durationSliderValue;
            const travelers = travelersSliderValue;
            const transportPrice = {
                min: transportSelected ? treatments[country.code].meta.prices.transportation.min : 0,
                max: transportSelected ? treatments[country.code].meta.prices.transportation.max : 0,
            };
            const accommodationPrice = {
                min: accommodationSelected ? treatments[country.code].meta.prices.accommodation.min : 0,
                max: accommodationSelected ? treatments[country.code].meta.prices.accommodation.max : 0,
            };
            const insurancePrice = {
                min: insuranceSelected ? treatments[country.code].meta.prices.insurance.min : 0,
                max: insuranceSelected ? treatments[country.code].meta.prices.insurance.max : 0,
            };
            const totalEstimatedPrice = {
                min: (treatments[country.code].meta.prices.treatment.min + transportPrice.min + accommodationPrice.min + insurancePrice.min) *
                    duration *
                    travelers,
                max: (treatments[country.code].meta.prices.treatment.max + transportPrice.max + accommodationPrice.max + insurancePrice.max) *
                    duration *
                    travelers,
            };
            setNextButtonStatus(true);
            setEstimatedPrice(totalEstimatedPrice);
            setSummary({
                name: 'Treatment',
                details: [
                    {
                        key: 'service',
                        text: 'Service details',
                        values: [
                            country.name,
                            service.name,
                            ...[durationSliderValue + (durationSliderValue === 1 ? ' day' : ' days')],
                            ...[travelersSliderValue + (travelersSliderValue === 1 ? ' traveler' : ' travelers')],
                        ],
                    },
                    {
                        key: 'transport',
                        text: 'Transport details',
                        values: [
                            ...(!transportSelected
                                ? ['No transportation']
                                : ['Includes transportation', 'Turkish Airlines', 'Taxi Service', 'Tour Guide']),
                            `Estimated price:  ${transportPrice.min}$ - ${transportPrice.max}$`,
                        ],
                    },
                    {
                        key: 'accommodation',
                        text: 'Accommodation details',
                        values: [
                            ...(!accommodationSelected ? ['No accommodation'] : ['Includes accommodation', '5 star Hotel', 'Extra Bed']),
                            `Estimated price:  ${accommodationPrice.min}$ - ${accommodationPrice.max}$`,
                        ],
                    },
                    {
                        key: 'insurance',
                        text: 'Insurance details',
                        values: [
                            ...(!insuranceSelected
                                ? ['No insurance']
                                : ['Includes insurance', 'Medical Insurance', 'Transportation Insurance', 'Personal Accident Insurance']),
                            `Estimated price:  ${insurancePrice.min}$ - ${insurancePrice.max}$`,
                        ],
                    },
                ],
            });
        }
    }, [
        selectedCountry,
        selectedService,
        durationSliderValue,
        travelersSliderValue,
        countries,
        services,
        transportSelected,
        accommodationSelected,
        insuranceSelected,
    ]);
    // save summary object to local storage
    // Route to contact page
    const onFinish = () => {
        localStorage.setItem('planDetails', JSON.stringify(summary));
        // router.push('/contact');
    };
    const ButtonArea = () => {
        return activeStep === steps.length ? (<Flex justifyContent="center" alignItems="center" flexDirection="column" mt={2}>
        <Link href="/contact" style={{ textDecoration: 'none' }}>
          <Button mt={10} w={'full'} bg={'green.400'} color={'white'} rounded={'xl'} boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'} onClick={() => {
                onFinish();
            }} _hover={{
                bg: 'green.500',
            }} _focus={{
                bg: 'green.500',
            }}>
            Contact Us
          </Button>
        </Link>
        <Stack isInline alignItems="center" mt={4}>
          <Text fontSize={'md'} mt={1}>
            or
          </Text>
        </Stack>
        <Stack isInline alignItems="center" mt={4}>
          <Button mx="auto" mt={1} w={'full'} rounded={'xl'} onClick={reset}>
            Reset Your Plan
          </Button>
        </Stack>
      </Flex>) : (<Flex justifyContent="end" alignItems="end" mt={4}>
        <Button isDisabled={activeStep === 0} mr={4} mb={'4px'} onClick={prevStep} size="sm" variant="ghost" color={'white'} _hover={{
                bg: 'none',
                border: '1px',
                borderColor: 'white',
            }}>
          Prev
        </Button>
        <Button isDisabled={!nextButtonStatus} variant="outline" colorScheme="blue" border="2px" borderColor="white" size="lg" rounded="xl" color="white" boxShadow={'0 2px 10px 0px rgb(66 153 225 / 43%)'} pb="3px" 
        //   h={40}
        // borderRadius="xl"
        _hover={{ bg: 'blue.400', color: 'white' }} onClick={() => {
                setNextButtonStatus(false);
                nextStep();
            }}>
          Next Step
        </Button>
      </Flex>);
    };
    return (<>
      <TreatmentContainer>
        <Header title="TREATMENT" imgURL="page/treatment.jpg"/>
        <InsideContainer>
          <PlanTreatmentLayout>
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <Box w={'full'} bg="rgba(255,255,255,1)" boxShadow={'2xl'} rounded={'md'} overflow={'hidden'} p="20">
                    <Steps size="lg" orientation="vertical" activeStep={activeStep}>
                      <Step width="100%" label={steps[0].label} key={0} description={steps[0].description}>
                        <Flex rounded="lg" width="100%" my={[2, 3, 6]}>
                          <TreatmentPlanningForm countries={countries} services={services} surgeries={selectedService?.surgeryPackages || []} durationSliderValue={durationSliderValue} travelersSliderValue={travelersSliderValue} onChangeCountry={(value) => {
            setSelectedCountry(countries[value]);
        }} onChangeService={(value) => {
            setSelectedService(services[value]);
        }} onChangeSurgery={(value) => {
            setSelectedSurgery(selectedService?.surgeryPackages[value]);
        }} onChangeDurationSlider={(value) => {
            setDurationSliderValue(value);
        }} onChangeTravelersSlider={(value) => {
            setTravelersSliderValue(value);
        }} onChangeTransportSelected={(value) => {
            setTransportSelected(value);
        }} onChangeAccommodationSelected={(value) => {
            setAccommodationSelected(value);
        }} onChangeInsuranceSelected={(value) => {
            setInsuranceSelected(value);
        }}/>
                        </Flex>
                      </Step>
                      <Step width="100%" label={steps[1].label} key={1} description={steps[1].description}>
                        {selectedCountry && (<TreatmentPricesComparison cities={treatments[selectedCountry.code].cities} selectedCity={selectedCity} onSelect={(city) => {
                setSelectedCity(city);
                setNextButtonStatus(true);
            }}/>)}
                      </Step>
                    </Steps>
                  </Box>
                  {activeStep === steps.length ? (<Flex px={4} py={4} width="100%" flexDirection="column">
                      <Heading mt={12} fontSize="xl" textAlign="center">
                        Woohoo! All steps completed!
                      </Heading>
                    </Flex>) : (<Flex width="100%" justify="flex-end"></Flex>)}
                </div>
                <div className="col-md-4">
                  <TreatmentPriceSummary priceText={`${estimatedPrice.min}$ - ${estimatedPrice.max}$`} features={summary} nextButtonArea={ButtonArea}/>
                </div>
              </div>
            </div>
          </PlanTreatmentLayout>
        </InsideContainer>
      </TreatmentContainer>
      <WaveCta />
      <Footer />
    </>);
}
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'home', 'navbar', 'countries'])),
            // Will be passed to the page component as props
        },
    };
}
export default PlanTreatment;
const PlanTreatmentLayout = styled.div `
  width: 100%;
`;
const TreatmentContainer = styled.div `
  background-color: #edeff3;
`;
const InsideContainer = styled(Container) `
  max-width: 190em;
  margin-top: -150px;
`;
