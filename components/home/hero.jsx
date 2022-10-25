import { Box, Container, Grid, GridItem, Heading, HStack, Image } from "@chakra-ui/react";
import Link from "next/link";

export function Hero() {
  return(
    <Box
      color='#6a9231'
    >
      <Container
        maxW='container.lg'
        height='100vh'
        display='flex'
        alignItems='center'
      > 
        <Box>
          <HStack
            mt='80px'
          >
            <Box>
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
            <Box boxSize='sm'>
              <Image src='images/mainImg.png' alt='Miyabi Katayama' />
            </Box>
          </HStack>
          <Grid
            mt='100px'
            templateColumns='repeat(4, 1fr)' 
            gap={6}
          >
            <GridItem w='100%' bg='blue.500'>
              <Link href="/images/Img_1.jpeg">
                <a target="_blank">
                  <Image src='/images/Img_1.jpeg' width="300" alt="" border="0" />
                </a>
              </Link>
            </GridItem>
            <GridItem w='100%' bg='blue.500'>
              <Link href="/images/Img_2.jpeg">
                <a target="_blank">
                  <Image src='/images/Img_2.jpeg' width="300" alt="" border="0" />
                </a>
              </Link>
            </GridItem>
            <GridItem w='100%' bg='blue.500'>
              <Link href="/images/Img_3.jpeg">
                <a target="_blank">
                  <Image src='/images/Img_3.jpeg' width="300" alt="" border="0" />
                </a>
              </Link>
            </GridItem>
            <GridItem w='100%' bg='blue.500'>
              <Link href="/images/Img_4.jpeg">
                <a target="_blank">
                  <Image src='/images/Img_4.jpeg' width="300" alt="" border="0" />
                </a>
              </Link>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}