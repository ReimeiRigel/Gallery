import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";

export function Spgallery () {
  return (
    <Box>
      <Heading
        color='#6a9231'
        as='h3' 
        size='4xl'
        ml='3'
        pt='8'
        pb='10'
      >
        Gallery
      </Heading>
      <VStack
        pb='50px'
      >
        <SimpleGrid columns={[2, 2, 3, 3, 3]} gap='10' spacing='40px'>
          <Box bgImage="url('/images/galleryImg_1.jpg')" bgSize='cover' w='150px' h='150px'></Box>
          <Box bgImage="url('/images/galleryImg_2.jpg')" bgSize='cover' w='150px' h='150px'></Box>
          <Box bgImage="url('/images/galleryImg_3.jpg')" bgSize='cover' w='150px' h='150px'></Box>
          <Box bgImage="url('/images/galleryImg_4.jpg')" bgSize='cover' w='150px' h='150px'></Box>
          <Box bgImage="url('/images/galleryImg_5.jpg')" bgSize='cover' w='150px' h='150px'></Box>
          <Box bgImage="url('/images/galleryImg_6.jpg')" bgSize='cover' w='150px' h='150px'></Box>
          <Box bgImage="url('/images/galleryImg_9.jpg')" bgSize='cover' w='150px' h='150px'></Box>
          <Box bgImage="url('/images/galleryImg_7.jpg')" bgSize='cover' w='150px' h='150px'></Box>
          <Box bgImage="url('/images/galleryImg_8.jpg')" bgSize='cover' w='150px' h='150px'></Box>
        </SimpleGrid>
      </VStack>
    </Box>
  )
}