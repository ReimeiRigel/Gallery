import { Box, Grid, GridItem, Heading, Image, VStack } from "@chakra-ui/react";
import Link from "next/link";

export function Sphero () {
  return (
    <Box>
      <VStack
        color='#6a9231'
      >
        <Image 
          mt='100px'
          boxSize='300px'
          objectFit='cover'
          src='images/mainImg.png' 
          alt='Miyabi Katayama' 
        />
        <Box
          my='10'
        >
          <Heading
            as='h1' 
            size='2xl'
            mt='5'
            ml='3'
            lineHeight='120%'
          >
            Miyabi Katayama<br />
            Exhibition
          </Heading>
          <Heading
            as='h2' 
            size='lg'
            mt='2'
            ml='3'
            mb='5'
          >
            OCT.22-29,2022
          </Heading>
        </Box>
        <Box
          display='flex'
          overflowX='auto'
          whiteSpace='nowrap'       
        >
          <Image src='/images/Img_1.jpeg' w='200' h='150' m='5' />
          <Image src='/images/Img_2.jpeg' w='200' h='150' m='5' />
          <Image src='/images/Img_3.jpeg' w='200' h='150' m='5' />
          <Image src='/images/Img_4.jpeg' w='200' h='150' m='5'/>
        </Box>
      </VStack>
    </Box>
  )
}