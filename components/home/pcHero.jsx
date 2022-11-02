import { Box, Container, Divider, Heading, Image, Text } from "@chakra-ui/react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css";

export function Pchero () {
  return (
    <Container
      maxW='3xl'
    >

      <Box
        py='10'
        textAlign='center'
        color='#00aacc'
      >
        <Heading
          as='h1'
          fontSize='3rem'
        >
          Gallery La-Mu
        </Heading>
        <Text
          fontWeight='bold'
          fontSize='1rem'
        >
          ギャラリー　ら・むー
        </Text>
      </Box>


      <Carousel autoPlay="true">
        <Box>
          <Image src='/images/hero_2.png'/>
        </Box>
        <Box>
          <Image src='/images/hero_1.png' />
        </Box>
        <Box>
          <Image src='/images/hero_3.png' />
        </Box>
      </Carousel>

    </Container>
  )
}