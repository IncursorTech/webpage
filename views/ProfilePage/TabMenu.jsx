import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { AspectRatio } from '@chakra-ui/react';
import CustomContainer from 'components/CustomContainer';
const fontSize = '2rem';
export default function TabMenu() {
    return (<CustomContainer>
      <Tabs isFitted variant="enclosed" fontSize={fontSize} border="2rem" borderColor="gray.100" bgColor="white">
        <TabList>
          <Tab fontSize={fontSize}>Overview</Tab>
          <Tab fontSize={fontSize}>Location</Tab>
          <Tab fontSize={fontSize}>Languages Spoken</Tab>
          <Tab fontSize={fontSize}>Services</Tab>
          <Tab fontSize={fontSize}>Map</Tab>
        </TabList>
        <TabPanels bgColor="white">
          <TabPanel p={70} bgColor="gray.100">
            <p>
              Acibadem Taksim Hospital Acibadem Taksim Hospital (JCI) is a 24,000 sqm, JCI-accredited hospital. It forms part of the wider
              Acibadem Healthcare Group. The modern hospital has 99 beds and 6 operating theaters, with all rooms equipped with modular
              operating systems, ensuring there is a safe and efficient environment for patients. Patients can receive all diagnosis and
              treatment services within the hospital without having to leave the complex. The hospital also boasts dedicated international
              patient coordinators who are available to assist in travel, accommodation, insurance coordination, visa assistance,
              translation, and interpretation. The hospital offer standard rooms or suites, and all rooms include WiFi, telephone, TV,
              catering, safe, and minibar. Medical Units The Acibadem Taksim Hospital, an undeniable emergency clinic serving in all parts
              of medication, incorporates General Surgery, Cosmetic, Plastic and Reconstructive Surgery, Gynecology, Neurosurgery,
              Orthopedics and Traumatology, Ophthalmology, ENT and Urology branches among its administrations. Medical Technologies The
              Acibadem Taksim Hospital has 3 Tesla MRI, Full Body MRI and 3D Digital Dimensional Mammography with Tomosynthesis gadgets
              inside its therapeutic innovation gear. Understanding solace and security Patients can get all analysis and treatment benefits
              in the clinic without going anyplace else. Additionally access to all significant claim to fame branches in specific regions
              of the medical clinic empower administrations with a base measure of strolling around. The administrations, being structured
              all in all, have made it workable for patients to get determination and treatment administrations with accentuation on
              understanding security without burning through whenever.
            </p>
          </TabPanel>
          <TabPanel p={70}>
            <p>
              Acibadem Taksim Hospital Location The Acibadem Taksim hospital is located in the city of Istanbul and is located 21 km from
              the Istanbul Ataturk Airport. It is accessible via public transport or taxi. Istanbul is a city of 2 halves, famous for both
              its Byzantine and Ottoman architecture and its position straddling the continents of Europe and Asia. Parts of its Old City
              are listed as a UNESCO World Heritage Site, with its Sultanahmet district famous for its open-air, Roman-era Hippodrome, as
              well as the iconic Blue Mosque.
            </p>
          </TabPanel>
          <TabPanel p={70}>
            <p>Arabic, English, French, German, Greek, Romanian, Russian, Swedish, Turkish</p>
          </TabPanel>
          <TabPanel p={70}>
            <p>
              Acibadem Taksim Hospital Free Services Online doctor consultation Medical records transfer Rehabilitation Translation services
              Interpreter services Airport pickup Hotel booking Free Wifi Phone in the room TV in the room Special dietary requests accepted
              Private rooms for patients available Family accommodation Pharmacy Laundry Mobility accessible rooms
            </p>
          </TabPanel>
          <TabPanel>
            <AspectRatio ratio={16 / 9}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" alt="demo"/>
            </AspectRatio>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomContainer>);
}
