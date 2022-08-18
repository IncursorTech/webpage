import { Box, chakra, Flex, Icon, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { BsCalculatorFill, BsFillGearFill, BsFillQuestionSquareFill, BsTerminalFill, BsTools } from 'react-icons/bs';
const Feature = ({ title, text, icon }) => {
  return (
    <Stack p={'2rem'} border="1px" rounded={'lg'}>
      <Flex w={8} h={8} my={'auto'} fontSize={'10rem'} align={'center'} justify={'center'} color={'black'} mb={1}>
        {icon}
      </Flex>
      <Text fontSize={'2xl'} fontWeight={600}>
        {title}
      </Text>
      <Text fontSize={'md'} color={'gray.600'}>
        {text}
      </Text>
    </Stack>
  );
};
export default function SimpleThreeColumns() {
  return (
    <Box maxW="150em" mb={"10rem"} mx={'auto'} pb={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 textAlign={'left'} fontSize={'4xl'} py={10} mb={'5rem'} fontWeight={'bold'}>
        Our services
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} spacing={10}>
        <Feature
          icon={<Icon as={BsFillGearFill} w={10} h={10} />}
          title={'SİSTEM ENTEGRASYONU'}
          text={`
          LiDAR'lar, kameralar, radarlar, GNSS sistemleri ve Drive by Wire denetleyicileri dahil AV'ler için sensör ve sistem entegrasyonunda deneyim sahibiyiz`}
        />
        <Feature
          icon={<Icon as={BsTerminalFill} w={10} h={10} />}
          title={'YAZILIM GELİŞTİRME'}
          text={`ADAS, otonom sürüş, haritalama, görüntü işleme ve çok daha fazlası dahil olmak üzere farklı birçok çalışmanızda gömülü yazılım ürünleri geliştirebiliriz.`}
        />
        <Feature
          icon={<Icon as={BsTools} w={10} h={10} />}
          title={'DONANIM TASARIMI'}
          text={`Tasarım gereksinimlerinize uygun olarak dokümantasyondan üretime kadar endüstriyel ürün geliştirmeleriniz üzerinde çalışabiliriz.`}
        />
        <Feature
          icon={<Icon as={BsCalculatorFill} w={10} h={10} />}
          title={'ALGORİTMA GELİŞTİRME'}
          text={`Güncel sensör füzyonu teknolojileri ile uygulamalarınızda gelişmiş sonuçlar elde etmeniz için yeni algoritmalar geliştirebilir ve test edebiliriz.`}
        />
        <Feature
          icon={<Icon as={BsFillQuestionSquareFill} w={10} h={10} />}
          title={'DANIŞMANLIK'}
          text={`Güncel sensör füzyonu teknolojileri ile uygulamalarınızda gelişmiş sonuçlar elde etmeniz için yeni algoritmalar geliştirebilir ve test edebiliriz.`}
        />
      </SimpleGrid>
    </Box>
  );
}
