import styled from 'styled-components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import WaveCta from 'components/WaveCta';
import Footer from 'components/FooterChakra';
import Accordion from 'components/AccordionChakra';
import dynamic from 'next/dynamic';
import Header from 'components/Header';
import CustomContainer from 'components/CustomContainer';
import { useDispatch } from 'react-redux';
import { setNavbarStatic } from 'store/navbarSlice';
import React, { useState } from 'react';
import { useDisclosure } from 'react-use-disclosure';

const Navbar = dynamic(() => import('components/Navbar'), {
  ssr: true,
});

function Quote() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="rgba(9, 160, 240, 1)" width="32" height="32" className="bi bi-quote" viewBox="0 0 32 32">
      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
    </svg>
  );
}

function Question() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="rgba(34, 77, 156, 1)"
      width="32"
      height="32"
      className="bi bi-question-square"
      viewBox="0 0 32 32"
    >
      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
      <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
    </svg>
  );
}

interface AccordionType {
  title: string;
  description: string;
}

const AccordionItems = [
  {
    title: 'Nasıl başlayabilirim?',
    description: `En basit ve en hızlı yol bir soruşturma göndermektir. Vakanızı hazırlayacak, birden fazla doktor ve hastane ile paylaşacak
    ve bir tedavi planı, tedavi maliyeti ve diğer yararlı bilgilerle size geri dönecek bir hasta ilişkileri yöneticisi size
    atanır.`,
  },
  {
    title: `Ne kadar tasarruf ederim?`,
    description: `Tasarruf, prosedüre ve varış yerine bağlı olarak% 30-90 arasında olabilir.`,
  },
  {
    title: `Maliyetle ilgili herhangi bir tahmin var mı?`,
    description: `Tıbbi geçmişiniz ve raporlarınız da dahil olmak üzere mevcut durumunuzu sağladıktan sonra, bilgiler bağlı hastanelerin
    uzmanları tarafından gözden geçirilecek ve incelenecek, buna göre tedavinizin toplam tahmini ile size geri dönecektir.`,
  },
  {
    title: `Neden bu kadar ucuza mal oluyor?`,
    description: `Maliyetteki fark, kalite eksikliğinden değil, işçilik ve sigorta maliyetlerinden kaynaklanmaktadır. Türkiye ayrıca ABD
    Doları ile uygun bir döviz kuruna sahiptir ve bu da maliyetleri düşürmeye yardımcı olur.`,
  },
  {
    title: `Doktorlar ve sağlık personeli İngilizce biliyor mu?`,
    description: `Tüm ortak hastanelerimiz akıcı İngilizce konuşan personele sahiptir. Fransızca, Arapça, Rusça, İspanyolca konuşan
    hastalara hizmet vermek için tercümanlarımız var. "Özel gereksinimim" var Bizimle istişarede bulunduktan sonra, mümkün
    olan tüm özel gereksinimleri karşılayacağız. Lütfen sizin için uygun düzenlemeleri yapabilmemiz için bize bu tür
    gereklilikleri bildirin.`,
  },
  {
    title: `Doğrudan hastaneyle ilgilenirsem, tıbbi masraflarım daha az maliyetli olur mu?`,
    description: ` Bizden aldığınız fiyat doğrudan hastaneden, indirimli ve en düşük seviyede. Hizmetlerini pazarlamak ve hastalarına yıl
    boyunca hizmet vermek için hastaneden ücret alıyoruz. MCT'nin faydaları hakkında daha fazla bilgi edinin.`,
  },
  {
    title: `Hangi prosedürler mevcuttur?`,
    description: `Türkiye, en basit prosedürlerden karmaşık prosedürlere kadar dünya standartlarında doktorlara ve olanaklara sahiptir. Ele
    aldığımız yaygın prosedürler Kanser, Diz ve Kalça Replasmanları, Kemik, Omurga, Kalp, Göz, Doğurganlık, Böbrek ve Genel
    Sağlık Kontrolleridir.`,
  },
];

const AccordionItems2 = [
  {
    title: `Hangi seyahat belgelerine ihtiyacım var?`,
    description: `Menşe ülkenize ve / veya vatandaşlığınıza ve varış ülkenize bağlı olarak, geçerli bir pasaport ve / veya Vizeye
    ihtiyacınız olacaktır (bu konuda da size yardımcı olabiliriz).`,
  },
  {
    title: `Tedavi için yurtdışına seyahat etmek pahalı değil mi?`,
    description: `Tıbbi maliyetlerdeki tasarruflarla karşılaştırıldığında, seyahat maliyeti genellikle ihmal edilebilir.`,
  },
  {
    title: `Seyahatim sırasında davamın ayrıntılarıyla kim ilgilenecek?`,
    description: `Her hasta, ziyaretleri ve başarılı geri dönüş ve iyileşme ile ilgili tüm ayrıntılarla ilgilenecek bir Hasta İlişkileri
    Yöneticisi'ne (PRM) atanır.`,
  },
  {
    title: `Uluslararası Hastanın Hindistan'da seyahat etmesi için önemli Talimatlar nelerdir?`,
    description: `Uluslararası hastaların havayolu, pasaport ve vize bilgilerini içeren seyahat talep formunu göndermeleri gerekecektir.
    Önemli acil durum numaralarını her zaman yanınızda bulundurun. Kredi kartları / Banka kartları / seyahat çeki güvenli
    ödeme şeklidir; ancak birçok durumda nakit para gerekecektir, bu nedenle bazı yerel para birimlerini elinizde tutmaya
    çalışın.`,
  },
  {
    title: `Cerrahi tedavi maliyeti neleri kapsamaz? `,
    description: `Hastanın hastaneden taburcu edilmesinden sonra reçete edilen herhangi bir ilaç, Hastanın Cerrahi Tedavisi ile ilgili
    olmayan, ortaya çıkabilecek herhangi bir komplikasyonla ilgili herhangi bir bakım veya hizmet (komplikasyon anında geçerli
    olan Hastanenin standart ücretlerine uygun olarak Hastadan ek masraflar tahsil edilecektir.) Hastanın operasyonu sırasında
    ortaya çıkabilecek ve Hastanın İç veya Dış İhtisas Yoğun Bakım Ünitesine transferini gerektiren majör komplikasyonlarla
    ilgili herhangi bir hizmet veya bakım. Söz konusu majör komplikasyon tedavisi ile ilgili ek masraflar, komplikasyon anında
    geçerli olan standart ücretlere uygun olarak hastadan tahsil edilecektir. Herhangi bir yatan hasta, hastanede yatış
    süresinin ilk uzunluğu bakımından, Hastanın cerrahi tedavisi ile ilgili olarak uzatılır ve tıbbi nedenlerden dolayı hasta
    ve cerrah tarafından kararlaştırılır. Böyle bir durumda, yatan hasta kalış süresinin uzatılmasına ilişkin masraflar
    Hastadan tahsil edilecek ve Hasta tarafından derhal Hastaneye ödenecektir.`,
  },
  {
    title: ``,
    description: ``,
  },
];

const AccordionItems3 = [
  {
    title: `Bir refakatçi alıyorsam, ne zaman seyahat edebilir?`,
    description: ` Refakatçi sizinle birlikte seyahat edebilir. Geçerli bir pasaporta ihtiyacı olacaktır ve vizeye de ihtiyacı olabilir (bu,
      hedef ülkeye ve menşe / vatandaşlık ülkesine bağlıdır). Türkiye'deki çoğu hastane, en az bir refakatçinin hastayla
      (hastanede) kalmasına izin verir.`,
  },
  {
    title: `VISA konusunda yardım sağlıyor musunuz?`,
    description: `Bir hastaneye karar verdikten sonra, size VISA davet mektubunu (hastane tarafından verilen) almak için hastane ile
    birlikte çalışacağız. Genellikle, hastalar bu sayede öncelikli bir VİZE alırlar`,
  },
  {
    title: `Nerede kalabilirim?`,
    description: `Hasta İlişkileri Yöneticisi konaklama seçeneklerini sizinle paylaşacaktır. Konforlu bir konaklama genellikle günlük 20
    USD'den başlar. Seyahatiniz için ayrılmadan önce, seçtiğiniz ve beğendiğiniz bir konaklama biriminde rezervasyon
    yaptırdığınızdan emin olmak için sizinle birlikte çalışıyoruz. Alternatif olarak, rezervasyonu online olarak
    yapabilirsiniz. Bunu yapmak için size popüler web sitelerini önereceğiz.`,
  },
  {
    title: `Hedef ülkem hakkında hiçbir şey bilmiyorum. Güvende olacak mıyım?`,
    description: `Türkiye turistler için güvenli bir yer. Hastaneler ve yakınındaki yerler tarafımızdan doğrulanır. Varışta, bizden şehir
    hakkında CONCIERGE kiti ve konaklamanızı kolaylaştırmak için İpuçları ve Püf Noktaları alacaksınız.`,
  },
  {
    title: `Kendi seyahat düzenlemelerimi rezerve edebilir miyim? `,
    description: `Evet. Uçuş rezervasyonu yapabilir ve konaklayabilir ve detayları bizimle paylaşabilirsiniz. Havaalanından karşılama
    hizmeti ücretsizdir. CMT Concierge, hareketinizi korumak ve rahat kalmak için her adımda yanınızdadır.`,
  },
  {
    title: `Türkiye'deki hastaneler sağlık sigortası kabul ediyor mu?`,
    description: `Türkiye'de uluslararası geçerli/geçerli sağlık sigortanız varsa lütfen hastaneleri bu konuda uyarın. Onaylı bir sigorta
    sağlayıcısıysa, hastaneler sizden kendi ülkenizle koordine etmeniz gereken bir avans garantisi almanızı isteyebilir.`,
  },
];
const AccordionItems4 = [
  {
    title: `Doktorların kimlik bilgilerini öğrenebilir miyim?`,
    description: `Evet, size doktorun profesyonel kimlik bilgilerini sağlıyoruz. Bunlara web sitemizde de göz atabilirsiniz.`,
  },
  {
    title: `Ya bir şeyler ters giderse? `,
    description: `Anlaşmalı olduğumuz tıp merkezleri milyonlarca dolar yatırım yaptı ve işlerini etkileyen herhangi bir olumsuz tanıtımın olumsuz etkisine sahip olmak istemiyorlar. Hastanın memnun olduğundan ve sonuçların başarılı olduğundan emin olmak için büyük özen gösterirler. Aynı zamanda, herhangi bir ameliyat veya tıbbi prosedür risk gerektirir ve başarılı sonuçlar hiç kimse tarafından garanti edilemez.`,
  },
  {
    title: `Aynı anda birden fazla tıbbi işlem yaptırabilir miyim? `,
    description: `Evet, bu mümkün olabilir. Bununla birlikte, bu, doktorun durumunuzu değerlendirmesine bağlı olacaktır. Bu daha fazla maliyet açısından faydalı olabilir.`,
  },
  {
    title: `Peki ya "bakım sonrası"?`,
    description: `Tedavinize bağlı olarak "bakım sonrası" programda size tavsiyede bulunulacaktır. Doktor tavsiyesine göre orada size yardımcı oluyoruz.
    "Görmeye" gidebilir miyim? Evet, sizi gezdirmekten mutluluk duyarız. Ücretsiz seyahat planlarımız hakkında Hasta İlişkileri Yöneticisi'nden kontrol edin.
    `,
  },
  {
    title: `Seyahatimden döndükten sonra takip bakımına ne dersiniz? `,
    description: `Hasta İlişkileri Yöneticisi, dönüşünüzden sonra da hizmetinizde olmaya devam eder. Doktorla takip konsültasyonları, raporlar, ilaçlar ve ihtiyacınız olabilecek diğer yardımlarda size yardımcı olacağız.
    `,
  },
];
export default function ContactPage() {
  const dispatch = useDispatch();
  dispatch(setNavbarStatic(false));

  const OverlayOne = () => <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) hue-rotate(90deg)" />;

  const OverlayTwo = () => <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="80%" backdropBlur="2px" />;

  const { isOpen, open, close } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <BackgroundColor>
      <Header title="BLOG" imgURL="page/contact.jpg" />
      <InsideContainer>
        <BlogContainer>
          <Heading fontSize="4rem">{Question()}TEDAVİ YOLCULUĞUNUZDA MERAK ETTİKLERİNİZ </Heading>
          <div className="row justify-content-center">
            <div className="col-6 p-5 m-5">
              {Quote()}
              <Heading fontSize="3rem">HASTANE VE DOKTOR SEÇERKEN </Heading>
              <Accordion accordionItems={AccordionItems} />
            </div>
            <div className="col-6 p-5 m-5">
              {Quote()}
              <Heading fontSize="3rem">SEYEHAT PLANLARKEN </Heading>
              <Accordion accordionItems={AccordionItems2} />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6 p-5 m-5">
              {Quote()}
              <Heading fontSize="3rem">SEYAHAT SIRASINDA </Heading>
              <Accordion accordionItems={AccordionItems3} />
            </div>
            <div className="col-6 p-5 m-5">
              {Quote()}
              <Heading fontSize="3rem">TEDAVİ SIRASINDA / SONRASI </Heading>
              <Accordion accordionItems={AccordionItems4} />
            </div>
          </div>
        </BlogContainer>
      </InsideContainer>
      <WaveCtaContact />
      <Footer />
    </BackgroundColor>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home', 'navbar', 'countries'])),
      // Will be passed to the page component as props
    },
  };
}

const WaveCtaContact = styled(WaveCta)`
  background-color: #edeff3;
`;

const BackgroundColor = styled.div`
  background-color: #edeff3;
`;
const BlogContainer = styled(CustomContainer)`
  max-width: 190em;
  margin-bottom: 5rem;
  background-color: rgba(255, 255, 255, 1);
  padding: 2rem;
  -webkit-box-shadow: 39px 38px 39px -31px rgba(120, 120, 120, 1);
  -moz-box-shadow: 39px 38px 39px -31px rgba(120, 120, 120, 1);
  box-shadow: 39px 38px 39px -31px rgba(120, 120, 120, 1);
  justify-content: center;
  .col-6 {
    background: #edeff3;
    max-width: 45%;
    -webkit-box-shadow: 39px 38px 39px -31px rgba(120, 120, 120, 1);
    -moz-box-shadow: 39px 38px 39px -31px rgba(120, 120, 120, 1);
    box-shadow: 39px 38px 39px -31px rgba(120, 120, 120, 1);
  }
  .dp-none {
    display: none;
  }
  .bi-quote {
    margin-top: -38px;
    font-size: 7rem;
    width: 50px;
    height: 50px;
    fill: rgba(34, 77, 156, 1);
  }
  .bi-question-square{
    width: 100%;
    height: 10rem;
  }
  :nth-child(2) {
    background-color: #edeff3;
    box-shadow: none;
    fill: rgba(34, 77, 156, 1);
`;

const Title = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 500;
  color: white;
`;

const Heading = styled.h4<{ fontSize?: string }>`
  font-size: ${(p) => p.fontSize};
  text-align: center;
  margin: 4rem;
  color: rgba(34, 77, 156, 1);
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: white;
`;

const InsideContainer = styled(CustomContainer)`
  max-width: 190em;
  margin-top: -150px;
`;
