import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";

export function Gallery() {
  return(
    <Container
      maxW='container.lg'
      height='100vh'
      display='flex'
      justifyContent='space-around'
      alignItems='center'
      color='#6a9231'
    >
      <Heading
        w='50%'
        as='h3' 
        size='4xl'
      >
        Gallery
      </Heading>
      <SimpleGrid columns={[2, null, 3]} spacing='40px'>
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
    </Container>
  )
}