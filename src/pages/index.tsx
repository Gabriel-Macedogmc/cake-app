import React from "react";
import styled from "styled-components";
import Image from "next/image";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import { ImWhatsapp } from "react-icons/im";

const Container = styled.div`
  background: "#212121";
`;

const Zap = () => {
  const response = fetch(" https://wa.me/55981617462").then((res) =>
    res.json()
  );
  return response;
};

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader alignItems="center">Bolo de Cenoura</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src="/Bolo-cenoura.jpg" width={500} height={400} />
          </ModalBody>
          <ModalFooter>
            <a href="https://api.whatsapp.com/send?phone=559295272722&text=O%20que%20voc%C3%AA%20deseja%20hoje%3F">
              <Button colorScheme={"whatsapp"} leftIcon={<ImWhatsapp />}>
                Peça já!
              </Button>
            </a>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Home;
