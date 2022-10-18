import { Box, Heading, Image, VStack } from "@chakra-ui/react";

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
            mb='100px'
            ml='3'
          >
            OCT.22-29,2022
          </Heading>
        </Box>
      </VStack>
    </Box>
  )
}