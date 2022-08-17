import { Box, Heading, Select, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Switch, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Country, Service } from 'types';

type Props = {
  nextButtonArea?: () => JSX.Element;
  countries: Country[];
  services: Service[];
  surgeries: [];
  durationSliderValue: number;
  travelersSliderValue: number;
  onChangeCountry: (value: number) => void;
  onChangeService: (value: number) => void;
  onChangeSurgery: (value: number) => void;
  onChangeDurationSlider: (value: number) => void;
  onChangeTravelersSlider: (value: number) => void;
  onChangeTransportSelected: (value: boolean) => void;
  onChangeAccommodationSelected: (value: boolean) => void;
  onChangeInsuranceSelected: (value: boolean) => void;
};

function TreatmentPlanningForm({
  nextButtonArea,
  countries,
  services,
  surgeries,
  durationSliderValue,
  travelersSliderValue,
  onChangeCountry,
  onChangeService,
  onChangeSurgery,
  onChangeDurationSlider,
  onChangeTravelersSlider,
  onChangeTransportSelected,
  onChangeAccommodationSelected,
  onChangeInsuranceSelected,
}: Props) {
  return (
    <div className="container">
      <div className="row my-4">
        <Heading>Treatment Services</Heading>
      </div>
      <div className="row t">
        <div className="row my-2">
          <div className="col-md-4 py-2">
            <Text fontSize="xl" textAlign={'left'}>
              Select Your Country
            </Text>
          </div>
          <div className="col-md-8 py-2">
            <Select placeholder="Select" size="lg" onChange={(event) => onChangeCountry(+event.target.value)}>
              {countries.map((country: Country, i) => (
                <option key={i} value={i}>
                  {country.name}
                </option>
              ))}
            </Select>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-4 py-2">
            <Text fontSize="xl" textAlign={'left'}>
              Service Type Selection
            </Text>
          </div>
          <div className="col-md-8 py-2">
            <Select
              placeholder="Select"
              size="lg"
              onChange={(event) => {
                onChangeService(+event.target.value);
              }}
            >
              {services.map((service: Service, i) => (
                <option key={i} value={i}>
                  {service.name}
                </option>
              ))}
            </Select>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-4 py-2">
            <Text fontSize="xl" textAlign={'left'}>
              Surgery Packages
            </Text>
          </div>
          <div className="col-md-8 py-2">
            <Select placeholder="Select" size="lg" onChange={(event) => onChangeSurgery(+event.target.value)}>
              {console.log(surgeries)}
              {surgeries.map((surgery, i) => (
                <option key={i} value={i}>
                  {surgery.name}
                </option>
              ))}
            </Select>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-4 py-2">
            <Text fontSize="xl" textAlign={'left'}>
              Duration of Treatment
            </Text>
          </div>
          <div className="col-md-8 py-2">
            <div className="row">
              <div className="col-md-9">
                <Slider defaultValue={1} min={1} max={30} step={1} onChange={(val) => onChangeDurationSlider(val)}>
                  <SliderTrack bg="blue.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="blue.300" />
                  </SliderTrack>
                  <SliderThumb boxSize={26} />
                </Slider>
              </div>
              <div className="col-md-3">
                <Text fontWeight="bold" color="blue.400" fontSize="xl">
                  {durationSliderValue} {durationSliderValue === 1 ? 'day' : 'days'}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-4 py-2">
            <Text fontSize="xl" textAlign={'left'}>
              Number of Travellers
            </Text>
          </div>
          <div className="col-md-8 py-2">
            <div className="row">
              <div className="col-md-9">
                <Slider defaultValue={1} min={1} max={10} step={1} onChange={(val) => onChangeTravelersSlider(val)}>
                  <SliderTrack bg="blue.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="blue.300" />
                  </SliderTrack>
                  <SliderThumb boxSize={26} />
                </Slider>
              </div>
              <div className="col-md-3">
                <Text fontWeight="bold" color="blue.400" fontSize="xl">
                  {travelersSliderValue} {travelersSliderValue === 1 ? 'travelers' : 'travelers'}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <Heading>Extra Services</Heading>
        </div>
        <div className="row my-2">
          <div className="col-md-4 py-2">
            <Text fontSize="xl" textAlign={'left'}>
              Transport
            </Text>
          </div>
          <div className="col-md-8 py-2 d-flex">
            <Switch
              colorScheme="blue"
              size="lg"
              onChange={(event) => {
                onChangeTransportSelected(event.target.checked);
              }}
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-4 py-2">
            <Text fontSize="xl" textAlign={'left'}>
              Accommodation
            </Text>
          </div>
          <div className="col-md-8 py-2 d-flex">
            <Switch
              colorScheme="blue"
              size="lg"
              onChange={(event) => {
                onChangeAccommodationSelected(event.target.checked);
              }}
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-4 py-2">
            <Text fontSize="xl" textAlign={'left'}>
              Translator
            </Text>
          </div>
          <div className="col-md-8 py-2 d-flex">
            <Switch
              colorScheme="blue"
              size="lg"
              onChange={(event) => {
                onChangeTransportSelected(event.target.checked);
              }}
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-4 py-2">
            <Text fontSize="xl" textAlign={'left'}>
              Insurance
            </Text>
          </div>
          <div className="col-md-8 py-2 d-flex">
            <Switch
              colorScheme="blue"
              size="lg"
              onChange={(event) => {
                onChangeInsuranceSelected(event.target.checked);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TreatmentPlanningForm;
