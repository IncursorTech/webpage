import CustomContainer from 'components/CustomContainer';
import Footer from 'components/FooterChakra';
import SearchSideBar from 'components/SearchSideBar';
import Header from 'components/Header';
import WaveCta from 'components/WaveCta';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useDispatch } from 'react-redux';
import { setNavbarStatic } from 'store/navbarSlice';
import styled from 'styled-components';
import { media } from 'utils/media';
import SkillsSection from 'views/Doctors/SkillsSection';
import { HospitalProfiles, SearchSideProps } from '../types';

const MetaSkillFormItems: Array<HospitalProfiles> = [
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
    description: `Türkiye / Ankara / Çankaya`,
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
    description: `Türkiye / Gaziantep / Merkez`,
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

const PageDescription: SearchSideProps = {
  header: 'Find a Hospital',
  title: 'Hospitals in Turkey',
  description: `JCI certificate of health institutions in Turkey consists of a total of 44 health institutions. Turkey has a high number of accredited institutions in the world which is located in the top three in the rankings. Health tourists can get both quality and affordable prices in the health services in Turkey. Regarding healthcare, quality is never compromised. The quality of health services in Turkey, JCI (Joint Commissions International / International Joint Commission), and ISO (International Organization for Standardization / International Standards Organization has been approved by). Medical Center Turkey assistance you to find the best treatment, doctors, and hospitals in Turkey at affordable prices. MCT provides consultation assistance under partner agreements with all JCI certificated hospitals in Turkey.`,
};

export default function HospitalsPage() {
  const dispatch = useDispatch();
  dispatch(setNavbarStatic(false));
  return (
    <>
      <HospitalsContainer>
        <Header title="HOSPITALS" imgURL="page/hospitals.jpg" />
        <InsideContainer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-9">
                <SkillsSection column={3} formItems={MetaSkillFormItems} href={'/profile'} buttonText="Detail" type="hospital" />
              </div>
              <div className="col-md-3">
                <SearchSideBar header={PageDescription.header} title={PageDescription.title} description={PageDescription.description} />
              </div>
            </div>
          </div>
        </InsideContainer>
      </HospitalsContainer>
      <WaveCtaContact />
      <Footer />
    </>
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

const HospitalsContainer = styled.div`
  z-index: -1;
  background-color: #edeff3;
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
`;
const WaveCtaContact = styled(WaveCta)`
  background-color: #edeff3;
`;
const InsideContainer = styled(CustomContainer)`
  max-width: 190em;
  margin-top: -150px;
`;
