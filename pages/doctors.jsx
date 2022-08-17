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
import CustomContainer from 'components/CustomContainer';
const MetaSkillFormItems = [
    {
        title: 'Prof. Dr. Ali Özkul',
        href: '/profile',
        description: `Ortapedi ve Tramvataoloji`,
        image: '/testimonials/author-photo-1.jpeg',
        background: false,
        tabMenuItems: [
            {
                title: 'Experience',
                description: <div></div>,
            },
            {
                title: 'Education',
                description: <div></div>,
            },
            {
                title: 'Memberships',
                description: <div></div>,
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
                description: <div></div>,
            },
            {
                title: 'Education',
                description: <div></div>,
            },
            {
                title: 'Memberships',
                description: <div></div>,
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
const PageDescription = {
    header: 'Find a Doctor',
    title: 'The Best Doctors in Turkey',
    description: `Many people living in different parts of the world say that the best doctors in the world live in Turkey has been mentioned with the
  names and achievements of many Turkish doctors in the field of international health in recent years. Turkish doctors continue to
  write their names in the history of health with their studies, successful operations and discoveries around the world and in Turkey.
  We have compiled for you the Turkish doctors who are impressive with their achievements and who have achieved great success in the
  field of health. Before we start our list, we would like to make a small note. We could only include a limited number of Turkish
  doctors in this list. Unfortunately, our page is not enough to explain theof Turkish doctors beyond the borders of the country.`,
};
export default function DoctorsPage() {
    const dispatch = useDispatch();
    dispatch(setNavbarStatic(false));
    return (<>
      <DoctorsContainer>
        <Header title="DOCTORS" imgURL="page/doctors.jpg"/>

        <InsideContainer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-9">
                <SkillsSection column={4} formItems={MetaSkillFormItems} href={'/profile'} buttonText="Detail" type="doctor"/>
              </div>
              <div className="col-md-3">
                <SearchSideBar header={PageDescription.header} title={PageDescription.title} description={PageDescription.description}/>
              </div>
            </div>
          </div>
        </InsideContainer>
      </DoctorsContainer>
      <WaveCtaContact />
      <Footer />
    </>);
}
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'home', 'navbar', 'region'])),
            // Will be passed to the page component as props
        },
    };
}
const Heading = styled.h1 `
  font-size: 8.2rem;
  font-weight: 900;
  letter-spacing: -0.09em;
  color: rgba(34, 77, 156, 1);
  text-align: left;
  margin-bottom: -3rem;
  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
const DoctorsContainer = styled.div `
  z-index: -1;
  background-color: #edeff3;
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
`;
const WaveCtaContact = styled(WaveCta) `
  background-color: #edeff3;
`;
const HeadingContainer = styled(CustomContainer) `
  z-index: 1;
  margin: 0 auto;
`;
const InsideContainer = styled(CustomContainer) `
  max-width: 190em;
  margin-top: -150px;
`;
