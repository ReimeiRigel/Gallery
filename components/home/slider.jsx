import { Box, Container, Heading, Image } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css";


export function Slider () {
  return (
    <Box>
      <Container
        maxW='container.lg'
        height='100vh'
        textAlign='center'
        display='flex'
        alignItems='center'
      >
        <Carousel autoPlay="true">
          <Box>
            <Image src='/images/Img_1.jpeg' w='800' h='600' />
          </Box>
          <Box>
            <Image src='/images/Img_2.jpeg' w='800' h='600' />
          </Box>
          <Box>
            <Image src='/images/Img_3.jpeg' w='800' h='600' />
          </Box>
          <Box>
            <Image src='/images/Img_4.jpeg' w='800' h='600' />
          </Box>
        </Carousel>
      </Container>
    </Box>
  )
}