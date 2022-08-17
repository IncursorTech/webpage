import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import JitsiMeetingSection from 'views/VideoConferencePage/JitsiMeetingSection';

export default function VideoMeetingPage() {
  return <JitsiMeetingSection></JitsiMeetingSection>;
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home', 'navbar', 'countries'])),
      // Will be passed to the page component as props
    },
  };
}
