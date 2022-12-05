import { Box, Container, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

export function Exhibition () {

  const Card = [
    {
      link:"/exhibitions/ex_3",
      img:"/images/MiyabiKatayama/km_main.png",
      title:"うちに帰ろう",
      name:"片山みやび",
      date:"Oct,22-29,2022"
    },
    {
      link:"/exhibitions/ex_2",
      img:"/images/TakahiroYamada/yt_top.jpg",
      title:"山田貴裕展",
      name:"山田貴裕",
      date:"Jul,1-31,2022"
    },
    {
      link:"/exhibitions/ex_1",
      img:"/images/Usa/usa_2.jpg",
      title:"いつか逢えるとき",
      name:"うさ",
      date:"Jun,6-27,2022"
    },
  ]

  return (
    <Box
      bg='#00aacc'
    >
      <Container
        maxW='3xl'
      >
        <VStack
          color='white'
          py='10'
        >
          <Heading
            fontSize='1.5rem'
          >
            EXHIBITIONS
          </Heading>
          <Text
            fontSize='.85rem'
            fontWeight='bold'
          >
            これまでの展覧会の様子
          </Text>
        </VStack>

        <SimpleGrid 
          columns={[ 1, ,2, 2,]}  
          spacing={10}
          justifyItems='center'
          pb='10'
        >
          
          { Card.map((val) => (

            <Link href={ val.link }>
              <Box
                bg='white'
                boxShadow='md'
                w={[ '90vw', '350px', '350px']}
                h='185px'
                borderRadius='10'
                display='flex'
                alignItems='center'
                >
                <Box
                  bgImg={ val.img }
                  bgSize='cover'
                  w='160px'
                  h='160px'
                  ml='3'
                  borderRadius='10'
                />
                <Box
                  ml='5'
                >
                  <Heading
                    as='h2'
                    fontSize='1rem'
                  >
                    { val.title }
                  </Heading>
                  <Box
                    mt='1'
                    ml='1'
                    fontSize='.75rem'
                    fontWeight='bold'
                  >
                    <Text> { val.name } </Text>
                    <Text> { val.date } </Text>

                  </Box>
                </Box>
              </Box>
            </Link>

          ))}
          
        </SimpleGrid>
      </Container>
    </Box>
  )
}