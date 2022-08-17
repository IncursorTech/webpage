import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { AspectRatio } from '@chakra-ui/react';
import CustomContainer from 'components/CustomContainer';
export default function TabMenu({ items }) {
    return (<CustomContainer>
      <Tabs isFitted variant="enclosed" fontSize={'1.5rem'} border="2rem" borderColor="gray.100" bgColor="white">
        <TabList bgColor="gray.200">
          {items.map((item, index) => (<Tab key={index} fontSize={'1.5rem'}>
              {item.title}
            </Tab>))}
        </TabList>
        <TabPanels bgColor="gray.100" boxShadow="2xl" minH={'50rem'}>
          {items.map((item, index) => item.title === 'Map' ? (<TabPanel key={index} p={30} pl={70} pr={70} textAlign={'justify'} bgColor="gray.100">
                <AspectRatio ratio={16 / 7}>
                  <iframe title="map" src={`https://www.google.com/maps/embed?pb=${item.description}`}/>
                </AspectRatio>
              </TabPanel>) : (<TabPanel key={index} p={30} pl={70} pr={70} textAlign={'justify'} bgColor="gray.100">
                <p>{item.description}</p>
              </TabPanel>))}
        </TabPanels>
      </Tabs>
    </CustomContainer>);
}
