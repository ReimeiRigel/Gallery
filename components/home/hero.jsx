import { Box, Container, Heading, Image } from "@chakra-ui/react";

export function Hero() {
  return(
    <Container
      maxW='container.lg'
      height='100vh'
      display='flex'
      justifyContent='space-around'
      alignItems='center'
    > 
      <Box
        color='#6a9231'
      >
        <Heading
          as='h1' 
          size='2xl'
          lineHeight='120%'
        >
          Miyabi Katayama Exhibition
        </Heading>
        <Heading
          as='h2' 
          size='lg'
          mt='10'
        >
          OCT.22-29,2022
        </Heading>
      </Box>
      <Box boxSize='md'>
        <Image src='images/mainImg.png' alt='Miyabi Katayama' />
      </Box>
    </Container>
  )
}