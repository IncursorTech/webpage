import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Button,
  Link,
} from '@chakra-ui/react';
import React, { MutableRefObject, useEffect, useState } from 'react';
import PlanInformation from './PlanInformation';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  btnRef: MutableRefObject<undefined>;
};

const PlanSidebar = ({ isOpen, onClose, btnRef }: Props) => {
  const [planDetail, setPlanDetail] = useState(null);

  useEffect(() => {
    const planDetail = localStorage.getItem('planDetails');
    if (planDetail) {
      setPlanDetail(JSON.parse(planDetail).details);
    } else {
      setPlanDetail(null);
    }
  }, []);

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
      <DrawerOverlay />
      <DrawerContent mt={'7rem'} minW={'40rem'}>
        <DrawerCloseButton />
        {planDetail && (
          <>
            <DrawerHeader m={8} fontSize={'2xl'}>
              My Treatment Plan
            </DrawerHeader>
            <DrawerBody>
              <PlanInformation
                destination={planDetail[0].values[0]}
                service={planDetail[0].values[1]}
                duration={planDetail[0].values[2]}
                travelers={planDetail[0].values[3]}
                transportation={planDetail[1].values[0]}
                accommodation={planDetail[2].values[0]}
                insurance={planDetail[3].values[0]}
                description={'Your treatment is not only about the treatment itself, but also about the environment in which you live.'}
                direction="vertical"
              />
            </DrawerBody>
          </>
        )}
        <DrawerFooter>
          <Link w={'full'} href="/contact">
            <Button
              mt={'2rem'}
              p={8}
              w={'full'}
              h={'full'}
              bg={'green.400'}
              color={'white'}
              rounded={'xl'}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
              onClick={() => {
                onClose();
              }}
              _hover={{
                bg: 'green.500',
              }}
              _focus={{
                bg: 'green.500',
              }}
            >
              Confirm Treatment Plan
            </Button>
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default PlanSidebar;
