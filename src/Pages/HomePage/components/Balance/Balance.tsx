import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
   Heading,
   Box,
   Button,
   ButtonGroup,
   Flex,
   Text,
   useDisclosure,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalCloseButton,
   ModalBody,
   ModalFooter,
   Input,
   FormControl,
   FormLabel,
   VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function Balance() {
   const [modalTitle, setModalTitle] = useState<string>('');
   const { isOpen, onOpen, onClose } = useDisclosure();

   const openModal = (modalName: string) => {
      setModalTitle(modalName);
      onOpen();
   };

   return (
      <Box>
         <Heading>Balance</Heading>
         <Text fontSize={'xl'}>100$</Text>
         <Flex>
            <ButtonGroup>
               <Button
                  onClick={() => openModal('Add Money')}
                  colorScheme={'green'}
                  size={'md'}
                  rightIcon={<AddIcon boxSize={3} />}
               >
                  Add
               </Button>
               <Button
                  onClick={() => openModal('Remove Money')}
                  colorScheme={'red'}
                  size={'md'}
                  rightIcon={<MinusIcon boxSize={3} />}
               >
                  Remove
               </Button>
            </ButtonGroup>
         </Flex>
         <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
               <ModalHeader>{modalTitle}</ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                  <VStack spacing={4}>
                     <FormControl>
                        <FormLabel>Description</FormLabel>
                        <Input />
                     </FormControl>
                     <FormControl isRequired>
                        <FormLabel>Amount</FormLabel>
                        <Input />
                     </FormControl>
                  </VStack>
               </ModalBody>

               <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                     Submit
                  </Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      </Box>
   );
}
