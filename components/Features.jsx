import { Box, chakra, Flex, Icon, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { BsCalculatorFill, BsFillGearFill, BsFillQuestionSquareFill, BsTerminalFill, BsTools } from 'react-icons/bs';

const Feature = ({ title, text, icon }) => {
  return (
    <Stack p={'2rem'} border="1px" rounded={'lg'}>
      <Flex w={8} h={8}  fontSize={'10rem'} align={'center'} justify={'center'} color={'black'} mb={1}>
        {icon}
      </Flex>
      <Text fontSize={'2xl'} fontWeight={600} textTransform={"capitalize"}>
        {title}
      </Text>
      <Text fontSize={'md'} color={'gray.600'}>
        {text}
      </Text>
    </Stack>
  );
};
export default function SimpleThreeColumns() {
  const { t } = useTranslation('features');
  return (
    <Box maxW="150em" mb={"10rem"} mx={'auto'} pb={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 textAlign={'left'} fontSize={'4xl'} py={10} mb={'5rem'} fontWeight={'bold'}>
        {t("features:header")}
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} spacing={10}>
        <Feature
          icon={<Icon as={BsFillGearFill} w={10} h={10} />}
          title={t("features:system.title")}
          text={t("features:system.description")}
        />
        <Feature
          icon={<Icon as={BsTerminalFill} w={10} h={10} />}
          title={t("features:software.title")}
          text={t("features:software.description")}
        />
        <Feature
          icon={<Icon as={BsTools} w={10} h={10} />}
          title={t("features:hardware.title")}
          text={t("features:hardware.description")}
        />
        <Feature
          icon={<Icon as={BsCalculatorFill} w={10} h={10} />}
          title={t("features:algorithms.title")}
          text={t("features:algorithms.description")}
        />
        <Feature
          icon={<Icon as={BsFillQuestionSquareFill} w={10} h={10} />}
          title={t("features:consultancy.title")}
          text={t("features:consultancy.description")}
        />
      </SimpleGrid>
    </Box>
  );
}
