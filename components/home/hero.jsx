import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css";

export function Hero () {
  return(
    <Box>
      <VStack>
        
        <Box
          my='10'
          textAlign='center'
          color='#00aacc'
        >
          <Heading>
            Gallery La-Mu
          </Heading>
          <Text
            fontWeight='bold'
            fontSize='.75rem'
          >
            ギャラリー　ら・むー
          </Text>
        </Box>
        
        {/*画像サイズ　３５２×２００*/}
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

      </VStack>
      
    </Box>
  )
}