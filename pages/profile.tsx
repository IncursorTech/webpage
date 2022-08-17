import CustomContainer from 'components/CustomContainer';
import Footer from 'components/FooterChakra';
import WaveCta from 'components/WaveCta';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import { useDispatch } from 'react-redux';
import { setNavbarStatic } from 'store/navbarSlice';
import styled from 'styled-components';
import { media } from 'utils/media';
import DescriptionSideBar from 'views/ProfilePage/DescriptionSideBar';
import TabMenu from 'components/TabMenu';
import Carousel from 'components/Carousel';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Text } from '@chakra-ui/react';

import { DoctorProfiles, HospitalProfiles } from '../types';
import DoctorsPage from './doctors';

const Images = ['Turkey/1.jpg', 'Turkey/2.jpg', 'Turkey/3.jpg'];

const MetaSkillFormItems: Array<DoctorProfiles> = [
  {
    title: 'Prof. Dr. Ali Özkul',
    href: '/profile',
    description: `Ortapedi ve Tramvataoloji`,
    image: '/testimonials/author-photo-1.jpeg',
    background: false,
    tabMenuItems: [
      {
        title: 'Experience',
        description: (
          <div>
            <Text>2005 – Artvin Hospital</Text>
            <Text>2013-2015 Balıkesir Hospital</Text>
            <Text>2015- Estethica Ataşehir Surgical Medical Center</Text>
          </div>
        ),
      },
      {
        title: 'Education',
        description: (
          <div>
            <Text>Ege University Faculty of Medicine</Text>
            <Text>On Dokuz Mayıs University – Department of Plastic, Reconstructive and Aesthetic Surgery (PHD) </Text>
            <Text></Text>
          </div>
        ),
      },
      {
        title: 'Memberships',
        description: (
          <div>
            <Text>Turkish Society of Reconstructive Microsurgery: Basic Microsurgery Course (2013)</Text>
            <Text>Association of Maxillofacial Surgeons: Orthognathic Surgery and Maxillofacial Fixation Course (2012)</Text>
            <Text>Aesthetic Plastic Surgery Association: Facial Cadaver Dissection Course (2015)</Text>
          </div>
        ),
      },
      {
        title: 'Map',
        description: `!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng`,
      },
    ],
  },
  {
    title: 'Doç. Dr. Emre Yılmaz',
    href: '#',
    description: `Göz`,
    image: '/testimonials/author-photo-2.jpeg',
    background: true,
    tabMenuItems: [
      {
        title: 'Experience',
        description: (
          <div>
            <Text>2013-2015: Hakkari Military Hospital, Hakkari, Turkey</Text>
            <Text>
              2015-2017: Gulhane Military Medical Academy Haydarpasa Training Hospital Otorhinolaryngology, Head and Neck Surgery Service,
              Istanbul, Turkey
            </Text>
            <Text>2017-2018: Observership, Cincinnati Children’s Hospital, Pediatric Otolaryngology, Cincinnati, Ohio, USA.</Text>
          </div>
        ),
      },
      {
        title: 'Education',
        description: (
          <div>
            <Text>1999-2005: Medical education, Gülhane Military Medical Academy</Text>
            <Text>2006-2008: Osmaniye Garrison Chief Physician, Osmaniye, Turkey</Text>
            <Text>
              2008-2013: Specialization training, Gulhane Military Medical Academy, Department of Otorhinolaryngology, Head and Neck
              Surgery, Ankara, Turkey
            </Text>
          </div>
        ),
      },
      {
        title: 'Memberships',
        description: (
          <div>
            <Text>Turkish Otorhinolaryngology, Head and Neck Surgery Association</Text>
            <Text></Text>
            <Text></Text>
          </div>
        ),
      },
    ],
  },
  {
    title: 'Op. Dr. Meltem Tanrıkulu Yılmaz',
    href: '#',
    description: `Genel Cerrahi`,
    image: '/testimonials/author-photo-3.jpeg',
    background: false,
    tabMenuItems: [
      {
        title: 'Experience',
        description: `2005 – Artvin Hospital
        2013-2015 Balıkesir Hospital
        2015- Estethica Ataşehir Surgical Medical Center`,
      },
      {
        title: 'Education',
        description: `2005 – Artvin Hospital
        2013-2015 Balıkesir Hospital
        2015- Estethica Ataşehir Surgical Medical Center`,
      },
      {
        title: 'Memberships',
        description: `2005 – Artvin Hospital
        2013-2015 Balıkesir Hospital
        2015- Estethica Ataşehir Surgical Medical Center`,
      },
    ],
  },
  {
    title: 'Prof. Dr. Ali Özkul',
    href: '#',
    description: `Ortapedi ve Tramvataoloji`,
    image: '/testimonials/author-photo-1.jpeg',
    background: false,
    tabMenuItems: [
      {
        title: 'Experience',
        description: `2005 – Artvin Hospital
        2013-2015 Balıkesir Hospital
        2015- Estethica Ataşehir Surgical Medical Center`,
      },
      {
        title: 'Education',
        description: `2005 – Artvin Hospital
        2013-2015 Balıkesir Hospital
        2015- Estethica Ataşehir Surgical Medical Center`,
      },
      {
        title: 'Memberships',
        description: `2005 – Artvin Hospital
        2013-2015 Balıkesir Hospital
        2015- Estethica Ataşehir Surgical Medical Center`,
      },
    ],
  },
  {
    title: 'Doç. Dr. Emre Yılmaz',
    href: '#',
    description: `Göz`,
    image: '/testimonials/author-photo-2.jpeg',
    background: true,
    tabMenuItems: [
      {
        title: 'Experience',
        description: `2005 – Artvin Hospital
        2013-2015 Balıkesir Hospital
        2015- Estethica Ataşehir Surgical Medical Center`,
      },
      {
        title: 'Education',
        description: `2005 – Artvin Hospital
        2013-2015 Balıkesir Hospital
        2015- Estethica Ataşehir Surgical Medical Center`,
      },
      {
        title: 'Memberships',
        description: `2005 – Artvin Hospital
        2013-2015 Balıkesir Hospital
        2015- Estethica Ataşehir Surgical Medical Center`,
      },
    ],
  },
  {
    title: 'Op. Dr. Meltem Tanrıkulu Yılmaz',
    href: '#',
    description: `Genel Cerrahi`,
    image: '/testimonials/author-photo-2.jpeg',
    background: false,
    tabMenuItems: [
      {
        title: 'Experience',
        description: `2005 – Artvin Hospital
        2013-2015 Balıkesir Hospital
        2015- Estethica Ataşehir Surgical Medical Center`,
      },
      {
        title: 'Education',
        description: `2005 – Artvin Hospital
        2013-2015 Balıkesir Hospital
        2015- Estethica Ataşehir Surgical Medical Center`,
      },
      {
        title: 'Memberships',
        description: `2005 – Artvin Hospital <br />
        2013-2015 Balıkesir Hospital
        2015- Estethica Ataşehir Surgical Medical Center`,
      },
    ],
  },
  {
    title: 'Prof. Dr. Ali Özkul',
    href: '#',
    description: `Ortapedi ve Tramvataoloji`,
    image: 'Bussines.png',
    background: false,
    tabMenuItems: [
      {
        title: 'Experience',
        description: `2005 – Artvin Hospital
        2013-2015 Balıkesir Hospital
        2015- Estethica Ataşehir Surgical Medical Center`,
      },
      {
        title: 'Education',
        description: `2005 – Artvin Hospital
        2013-2015 Balıkesir Hospital
        2015- Estethica Ataşehir Surgical Medical Center`,
      },
      {
        title: 'Memberships',
        description: `2005 – Artvin Hospital
        2013-2015 Balıkesir Hospital
        2015- Estethica Ataşehir Surgical Medical Center`,
      },
    ],
  },
  {
    title: 'Doç. Dr. Emre Yılmaz',
    href: '#',
    description: `Göz`,
    image: 'doctor_PNG16022.png',
    background: true,
    tabMenuItems: [
      {
        title: 'Experience',
        description: `2005 – Artvin Hospital
        2013-2015 Balıkesir Hospital
        2015- Estethica Ataşehir Surgical Medical Center`,
      },
      {
        title: 'Education',
        description: `2005 – Artvin Hospital
        2013-2015 Balıkesir Hospital
        2015- Estethica Ataşehir Surgical Medical Center`,
      },
      {
        title: 'Memberships',
        description: `2005 – Artvin Hospital
        2013-2015 Balıkesir Hospital
        2015- Estethica Ataşehir Surgical Medical Center`,
      },
    ],
  },
  {
    title: 'Op. Dr. Meltem Tanrıkulu Yılmaz',
    href: '#',
    description: `Genel Cerrahi`,
    image: 'call-center.png',
    background: false,
    tabMenuItems: [
      {
        title: 'Experience',
        description: `2005 – Artvin Hospital
        2013-2015 Balıkesir Hospital
        2015- Estethica Ataşehir Surgical Medical Center`,
      },
      {
        title: 'Education',
        description: `2005 – Artvin Hospital
        2013-2015 Balıkesir Hospital
        2015- Estethica Ataşehir Surgical Medical Center`,
      },
      {
        title: 'Memberships',
        description: `2005 – Artvin Hospital
        2013-2015 Balıkesir Hospital
        2015- Estethica Ataşehir Surgical Medical Center`,
      },
    ],
  },
];

const HospitalFormItems: Array<HospitalProfiles> = [
  {
    title: 'ACIBADEM',
    href: '#',
    description: `Türkiye / İstanbul / Ataşehir`,
    image: 'Hospitals/06042018_160138_28127_kurumsal.png',
    background: false,
    tabMenuItems: [
      {
        title: 'Overview',
        description: `Acibadem Taksim Hospital
        Acibadem Taksim Hospital (JCI) is a 24,000 sqm, JCI-accredited hospital. It forms part of the wider Acibadem Healthcare Group. The modern hospital has 99 beds and 6 operating theaters, with all rooms equipped with modular operating systems, ensuring there is a safe and efficient environment for patients.
        
        Patients can receive all diagnosis and treatment services within the hospital without having to leave the complex. The hospital also boasts dedicated international patient coordinators who are available to assist in travel, accommodation, insurance coordination, visa assistance, translation, and interpretation.
        
        The hospital offer standard rooms or suites, and all rooms include WiFi, telephone, TV, catering, safe, and minibar.
        
        Medical Units
        The Acibadem Taksim Hospital, an undeniable emergency clinic serving in all parts of medication, incorporates General Surgery, Cosmetic, Plastic and Reconstructive Surgery, Gynecology, Neurosurgery, Orthopedics and Traumatology, Ophthalmology, ENT and Urology branches among its administrations.
        
        Medical Technologies
        The Acibadem Taksim Hospital has 3 Tesla MRI, Full Body MRI and 3D Digital Dimensional Mammography with Tomosynthesis gadgets inside its therapeutic innovation gear.
        
        Understanding solace and security
        Patients can get all analysis and treatment benefits in the clinic without going anyplace else. Additionally access to all significant claim to fame branches in specific regions of the medical clinic empower administrations with a base measure of strolling around. The administrations, being structured all in all, have made it workable for patients to get determination and treatment administrations with accentuation on understanding security without burning through whenever.`,
      },
      {
        title: 'Location',
        description: `Acibadem Taksim Hospital Location
        The Acibadem Taksim hospital is located in the city of Istanbul and is located 21 km from the Istanbul Ataturk Airport. It is accessible via public transport or taxi.
        
        Istanbul is a city of 2 halves, famous for both its Byzantine and Ottoman architecture and its position straddling the continents of Europe and Asia. Parts of its Old City are listed as a UNESCO World Heritage Site, with its Sultanahmet district famous for its open-air, Roman-era Hippodrome, as well as the iconic Blue Mosque`,
      },
      {
        title: 'Languages spoken',
        description: `Arabic, English, French, German, Greek, Romanian, Russian, Swedish, Turkish`,
      },
      {
        title: 'Services',
        description: `Online doctor consultation
        Medical records transfer
        Rehabilitation
        Translation services
        Interpreter services
        Airport pickup
        Hotel booking
        Free Wifi
        Phone in the room
        TV in the room
        Special dietary requests accepted
        Private rooms for patients available
        Family accommodation
        Pharmacy
        Laundry
        Mobility accessible rooms`,
      },
      {
        title: 'Map',
        description: `2005 – Artvin Hospital
        2013-2015 Balıkesir Hospital
        2015- Estethica Ataşehir Surgical Medical Center`,
      },
    ],
  },
  {
    title: 'MEMORIAL',
    href: '#',
    description: `Türkiye / İstanbul / Taksim`,
    image: 'Hospitals/cfd714e2bdd34adfa73f2a5b0861927fjpg_ebb4.jpg',
    background: false,
    tabMenuItems: [
      {
        title: 'Overview',
        description: `AFounded in 1995, Memorial Healthcare Investments Corporation’s first project was Memorial Şişli Hospital. Construction was completed in the late 1999 and Memorial Sisli Hospital received its first patient in February 2000.

        The building of Memorial Şişli Hospital, whose name will be remembered with trust and leadership, was completed in about 3 years. The hospital, which should be in an international health institution and equipped with the most advanced technology of the time, received its first patient in February 2000.
        
        Memorial Şişli Hospital inception just two years after the JCI (Joint Commission International) Accreditation Certificate by world standards in the registration of quality health services entitled to receive this document Turkey’s first and the world was 21. hospital.
        
        Memorial Şişli Hospital has a prestigious reputation in areas such as cardiology, cardiovascular surgery, organ transplantation, IVF and genetics and provides high quality healthcare services in every medical specialty.`,
      },
      {
        title: 'Location',
        description: `Şişli Hospital provides high quality healthcare services at international standards to its local and international patients with its 53.000 square meter covered area, 200 bed capacity, 10.000 square meter parking lot with 300 car capacity, central automated system, pressure support system to control temperature and humidity, pneumatic tube transfer system and 120 people capacity conference room.`,
      },
      {
        title: 'Languages spoken',
        description: `Arabic, English, French, German, Greek, Romanian, Russian, Swedish, Turkish`,
      },
      {
        title: 'Services',
        description: `Online doctor consultation
        Medical records transfer
        Rehabilitation
        Translation services
        Interpreter services
        Airport pickup
        Hotel booking
        Free Wifi
        Phone in the room
        TV in the room
        Special dietary requests accepted
        Private rooms for patients available
        Family accommodation
        Pharmacy
        Laundry
        Mobility accessible rooms`,
      },
      {
        title: 'Map',
        description: ``,
      },
    ],
  },
  {
    title: 'MEDICANA',
    href: '#',
    description: `Türkiye / İstanbul / Merter`,
    image: 'Hospitals/hospitals-in-istanbul.png',
    background: false,
    tabMenuItems: [
      {
        title: 'Overview',
        description: `Acibadem Taksim Hospital
        Acibadem Taksim Hospital (JCI) is a 24,000 sqm, JCI-accredited hospital. It forms part of the wider Acibadem Healthcare Group. The modern hospital has 99 beds and 6 operating theaters, with all rooms equipped with modular operating systems, ensuring there is a safe and efficient environment for patients.
        
        Patients can receive all diagnosis and treatment services within the hospital without having to leave the complex. The hospital also boasts dedicated international patient coordinators who are available to assist in travel, accommodation, insurance coordination, visa assistance, translation, and interpretation.
        
        The hospital offer standard rooms or suites, and all rooms include WiFi, telephone, TV, catering, safe, and minibar.
        
        Medical Units
        The Acibadem Taksim Hospital, an undeniable emergency clinic serving in all parts of medication, incorporates General Surgery, Cosmetic, Plastic and Reconstructive Surgery, Gynecology, Neurosurgery, Orthopedics and Traumatology, Ophthalmology, ENT and Urology branches among its administrations.
        
        Medical Technologies
        The Acibadem Taksim Hospital has 3 Tesla MRI, Full Body MRI and 3D Digital Dimensional Mammography with Tomosynthesis gadgets inside its therapeutic innovation gear.
        
        Understanding solace and security
        Patients can get all analysis and treatment benefits in the clinic without going anyplace else. Additionally access to all significant claim to fame branches in specific regions of the medical clinic empower administrations with a base measure of strolling around. The administrations, being structured all in all, have made it workable for patients to get determination and treatment administrations with accentuation on understanding security without burning through whenever.`,
      },
      {
        title: 'Location',
        description: `Acibadem Taksim Hospital Location
        The Acibadem Taksim hospital is located in the city of Istanbul and is located 21 km from the Istanbul Ataturk Airport. It is accessible via public transport or taxi.
        
        Istanbul is a city of 2 halves, famous for both its Byzantine and Ottoman architecture and its position straddling the continents of Europe and Asia. Parts of its Old City are listed as a UNESCO World Heritage Site, with its Sultanahmet district famous for its open-air, Roman-era Hippodrome, as well as the iconic Blue Mosque`,
      },
      {
        title: 'Languages spoken',
        description: `Arabic, English, French, German, Greek, Romanian, Russian, Swedish, Turkish`,
      },
      {
        title: 'Services',
        description: `Online doctor consultation
        Medical records transfer
        Rehabilitation
        Translation services
        Interpreter services
        Airport pickup
        Hotel booking
        Free Wifi
        Phone in the room
        TV in the room
        Special dietary requests accepted
        Private rooms for patients available
        Family accommodation
        Pharmacy
        Laundry
        Mobility accessible rooms`,
      },
      {
        title: 'Map',
        description: `2005 – Artvin Hospital
        2013-2015 Balıkesir Hospital
        2015- Estethica Ataşehir Surgical Medical Center`,
      },
    ],
  },
  {
    title: 'HOSPITAL',
    href: '#',
    description: `Türkiye / Ankara / Çayyolu`,
    image: 'Hospitals/international-hospital-yesilkoy-b.jpg',
    background: false,
    tabMenuItems: [
      {
        title: 'Overview',
        description: `Acibadem Taksim Hospital
        Acibadem Taksim Hospital (JCI) is a 24,000 sqm, JCI-accredited hospital. It forms part of the wider Acibadem Healthcare Group. The modern hospital has 99 beds and 6 operating theaters, with all rooms equipped with modular operating systems, ensuring there is a safe and efficient environment for patients.
        
        Patients can receive all diagnosis and treatment services within the hospital without having to leave the complex. The hospital also boasts dedicated international patient coordinators who are available to assist in travel, accommodation, insurance coordination, visa assistance, translation, and interpretation.
        
        The hospital offer standard rooms or suites, and all rooms include WiFi, telephone, TV, catering, safe, and minibar.
        
        Medical Units
        The Acibadem Taksim Hospital, an undeniable emergency clinic serving in all parts of medication, incorporates General Surgery, Cosmetic, Plastic and Reconstructive Surgery, Gynecology, Neurosurgery, Orthopedics and Traumatology, Ophthalmology, ENT and Urology branches among its administrations.
        
        Medical Technologies
        The Acibadem Taksim Hospital has 3 Tesla MRI, Full Body MRI and 3D Digital Dimensional Mammography with Tomosynthesis gadgets inside its therapeutic innovation gear.
        
        Understanding solace and security
        Patients can get all analysis and treatment benefits in the clinic without going anyplace else. Additionally access to all significant claim to fame branches in specific regions of the medical clinic empower administrations with a base measure of strolling around. The administrations, being structured all in all, have made it workable for patients to get determination and treatment administrations with accentuation on understanding security without burning through whenever.`,
      },
      {
        title: 'Location',
        description: `Acibadem Taksim Hospital Location
        The Acibadem Taksim hospital is located in the city of Istanbul and is located 21 km from the Istanbul Ataturk Airport. It is accessible via public transport or taxi.
        
        Istanbul is a city of 2 halves, famous for both its Byzantine and Ottoman architecture and its position straddling the continents of Europe and Asia. Parts of its Old City are listed as a UNESCO World Heritage Site, with its Sultanahmet district famous for its open-air, Roman-era Hippodrome, as well as the iconic Blue Mosque`,
      },
      {
        title: 'Languages spoken',
        description: `Arabic, English, French, German, Greek, Romanian, Russian, Swedish, Turkish`,
      },
      {
        title: 'Services',
        description: `Online doctor consultation
        Medical records transfer
        Rehabilitation
        Translation services
        Interpreter services
        Airport pickup
        Hotel booking
        Free Wifi
        Phone in the room
        TV in the room
        Special dietary requests accepted
        Private rooms for patients available
        Family accommodation
        Pharmacy
        Laundry
        Mobility accessible rooms`,
      },
      {
        title: 'Map',
        description: `2005 – Artvin Hospital
        2013-2015 Balıkesir Hospital
        2015- Estethica Ataşehir Surgical Medical Center`,
      },
    ],
  },
  {
    title: 'MEMORIAL',
    href: '#',
    description: `Göz`,
    image: 'Hospitals/cfd714e2bdd34adfa73f2a5b0861927fjpg_ebb4.jpg',
    background: false,
    tabMenuItems: [
      {
        title: 'Overview',
        description: `Acibadem Taksim Hospital
        Acibadem Taksim Hospital (JCI) is a 24,000 sqm, JCI-accredited hospital. It forms part of the wider Acibadem Healthcare Group. The modern hospital has 99 beds and 6 operating theaters, with all rooms equipped with modular operating systems, ensuring there is a safe and efficient environment for patients.
        
        Patients can receive all diagnosis and treatment services within the hospital without having to leave the complex. The hospital also boasts dedicated international patient coordinators who are available to assist in travel, accommodation, insurance coordination, visa assistance, translation, and interpretation.
        
        The hospital offer standard rooms or suites, and all rooms include WiFi, telephone, TV, catering, safe, and minibar.
        
        Medical Units
        The Acibadem Taksim Hospital, an undeniable emergency clinic serving in all parts of medication, incorporates General Surgery, Cosmetic, Plastic and Reconstructive Surgery, Gynecology, Neurosurgery, Orthopedics and Traumatology, Ophthalmology, ENT and Urology branches among its administrations.
        
        Medical Technologies
        The Acibadem Taksim Hospital has 3 Tesla MRI, Full Body MRI and 3D Digital Dimensional Mammography with Tomosynthesis gadgets inside its therapeutic innovation gear.
        
        Understanding solace and security
        Patients can get all analysis and treatment benefits in the clinic without going anyplace else. Additionally access to all significant claim to fame branches in specific regions of the medical clinic empower administrations with a base measure of strolling around. The administrations, being structured all in all, have made it workable for patients to get determination and treatment administrations with accentuation on understanding security without burning through whenever.`,
      },
      {
        title: 'Location',
        description: `Acibadem Taksim Hospital Location
        The Acibadem Taksim hospital is located in the city of Istanbul and is located 21 km from the Istanbul Ataturk Airport. It is accessible via public transport or taxi.
        
        Istanbul is a city of 2 halves, famous for both its Byzantine and Ottoman architecture and its position straddling the continents of Europe and Asia. Parts of its Old City are listed as a UNESCO World Heritage Site, with its Sultanahmet district famous for its open-air, Roman-era Hippodrome, as well as the iconic Blue Mosque`,
      },
      {
        title: 'Languages spoken',
        description: `Arabic, English, French, German, Greek, Romanian, Russian, Swedish, Turkish`,
      },
      {
        title: 'Services',
        description: `Online doctor consultation
        Medical records transfer
        Rehabilitation
        Translation services
        Interpreter services
        Airport pickup
        Hotel booking
        Free Wifi
        Phone in the room
        TV in the room
        Special dietary requests accepted
        Private rooms for patients available
        Family accommodation
        Pharmacy
        Laundry
        Mobility accessible rooms`,
      },
      {
        title: 'Map',
        description: `2005 – Artvin Hospital
        2013-2015 Balıkesir Hospital
        2015- Estethica Ataşehir Surgical Medical Center`,
      },
    ],
  },
  {
    title: 'MEDICANA',
    href: '#',
    description: `Genel Cerrahi`,
    image: 'Hospitals/hospitals-in-istanbul.png',
    background: false,
    tabMenuItems: [
      {
        title: 'Overview',
        description: `Acibadem Taksim Hospital
        Acibadem Taksim Hospital (JCI) is a 24,000 sqm, JCI-accredited hospital. It forms part of the wider Acibadem Healthcare Group. The modern hospital has 99 beds and 6 operating theaters, with all rooms equipped with modular operating systems, ensuring there is a safe and efficient environment for patients.
        
        Patients can receive all diagnosis and treatment services within the hospital without having to leave the complex. The hospital also boasts dedicated international patient coordinators who are available to assist in travel, accommodation, insurance coordination, visa assistance, translation, and interpretation.
        
        The hospital offer standard rooms or suites, and all rooms include WiFi, telephone, TV, catering, safe, and minibar.
        
        Medical Units
        The Acibadem Taksim Hospital, an undeniable emergency clinic serving in all parts of medication, incorporates General Surgery, Cosmetic, Plastic and Reconstructive Surgery, Gynecology, Neurosurgery, Orthopedics and Traumatology, Ophthalmology, ENT and Urology branches among its administrations.
        
        Medical Technologies
        The Acibadem Taksim Hospital has 3 Tesla MRI, Full Body MRI and 3D Digital Dimensional Mammography with Tomosynthesis gadgets inside its therapeutic innovation gear.
        
        Understanding solace and security
        Patients can get all analysis and treatment benefits in the clinic without going anyplace else. Additionally access to all significant claim to fame branches in specific regions of the medical clinic empower administrations with a base measure of strolling around. The administrations, being structured all in all, have made it workable for patients to get determination and treatment administrations with accentuation on understanding security without burning through whenever.`,
      },
      {
        title: 'Location',
        description: `Acibadem Taksim Hospital Location
        The Acibadem Taksim hospital is located in the city of Istanbul and is located 21 km from the Istanbul Ataturk Airport. It is accessible via public transport or taxi.
        
        Istanbul is a city of 2 halves, famous for both its Byzantine and Ottoman architecture and its position straddling the continents of Europe and Asia. Parts of its Old City are listed as a UNESCO World Heritage Site, with its Sultanahmet district famous for its open-air, Roman-era Hippodrome, as well as the iconic Blue Mosque`,
      },
      {
        title: 'Languages spoken',
        description: `Arabic, English, French, German, Greek, Romanian, Russian, Swedish, Turkish`,
      },
      {
        title: 'Services',
        description: `Online doctor consultation
        Medical records transfer
        Rehabilitation
        Translation services
        Interpreter services
        Airport pickup
        Hotel booking
        Free Wifi
        Phone in the room
        TV in the room
        Special dietary requests accepted
        Private rooms for patients available
        Family accommodation
        Pharmacy
        Laundry
        Mobility accessible rooms`,
      },
      {
        title: 'Map',
        description: `2005 – Artvin Hospital
        2013-2015 Balıkesir Hospital
        2015- Estethica Ataşehir Surgical Medical Center`,
      },
    ],
  },
];
export default function ProfilePage() {
  const dispatch = useDispatch();
  dispatch(setNavbarStatic(false));
  const router = useRouter();

  const [type, setType] = useState('');
  const [key, setKey] = useState('');
  const [data, setData] = useState('');

  useEffect(() => {
    if (!router.isReady) return;

    setType(router.query.type);
    setKey(router.query.key);
    router.query.type === 'doctor' ? setData(MetaSkillFormItems[router.query.key]) : setData(HospitalFormItems[router.query.key]);
  }, [router.isReady, router.query.key, router.query.type]);

  return (
    <Background>
      <Carousel iconOpacity="0" height="600px" padding="5rem" sliderImageURL={Images} backgroundSize="cover" />
      <MainContainer>
        <div className="row">
          <div className="col-md-3">
            <DescriptionSideBar image={data.image} title={data.title} description={data.description} />
          </div>
          <div className="col-md-9 description-block">{data?.tabMenuItems && <TabMenu items={data.tabMenuItems} />}</div>
        </div>
      </MainContainer>
      <WaveCta />
      <Footer />
    </Background>
  );
}
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home', 'navbar', 'region'])),
      // Will be passed to the page component as props
    },
  };
}

const MainContainer = styled(CustomContainer)`
  padding-top: 7rem;
  max-width: 190em;

  ${media('<=tablet')} {
    max-width: 100%;
    padding: 0;
  }
  ${media('<=desktop')} {
    padding: 0;
    margin-bottom: 0;
  }
  .description-block > * {
    margin-bottom: 5rem;
  }
`;

const Background = styled.div`
  background-color: #edeff3;
`;
