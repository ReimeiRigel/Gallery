import { Box, Container, Divider, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Spheader } from "../../components/global/spHeader";
import { Spfooter } from "../../components/global/spFooter";
import { Menubar } from "../../components/global/menuBar";

export default function Exhibition1 () {


  const gallery = [
    {
      img:'/images/Usa/usa_1.jpg',
      alt:'usa.img',
    },
    {
      img:'/images/Usa/usa_2.jpg',
      alt:'usa.img',
    },
    {
      img:'/images/Usa/usa_3.jpg',
      alt:'usa.img',
    },
    {
      img:'/images/Usa/usa_4.jpg',
      alt:'usa.img',
    },
    {
      img:'/images/Usa/usa_5.jpg',
      alt:'usa.img',
    },
    {
      img:'/images/Usa/usa_6.jpg',
      alt:'usa.img',
    }
  ]

  return(
    <Box>

      <Menubar />

      <Spheader />

      <Container
        maxW='3xl'
      >

        <Box
          mt='10'
          ml='2'
        >
          <Heading
            as='h2'
          >
            いつか逢えるとき
          </Heading>
          <Text
            fontWeight='bold'
          >
            Jun,6-27,2022
          </Text>
        </Box>
        
        <VStack
          my='10'
        >
          <Image
            boxSize='200px'
            borderRadius='50%'
            src='/images/Usa/usa.jpg'
            alt='museslamu-artist'
          />
          <Heading
            as='h3'
            fontSize='1.25rem'
            py='5'
          >
            うさ
          </Heading>
          <Text
            lineHeight='1.5'
            px='5'
          >
            絵本作家、劇団Sol.星の花主宰、動物レスキューチームうーにゃん代表としても活動している創作家。
            自然が好きで、世界各地を旅する中、人間の都合により過酷な環境で生きることになった動物たちや、傷ついた地球の姿を知る。
            優しい世界につながっていくことを願い、創作活動を続けている。
          </Text>
        </VStack>

        <Divider />

        <Heading
          as='h3'
          mt='10'
          fontSize='1.5rem'
          textAlign='center'
        >
          GALLERY
        </Heading>

        { gallery.map((val) => (

          <Box
            mx='5'
            my='10'
          >
          <Image src= { val.img }  alt={ val.alt }/>
          </Box>
      
        ))}

      </Container>

      <Spfooter />

    </Box>
  )
}