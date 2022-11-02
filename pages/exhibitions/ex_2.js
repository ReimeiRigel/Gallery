import { Box, Container, Divider, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Spheader } from "../../components/global/spHeader";
import { Spfooter } from "../../components/global/spFooter";
import { Menubar } from "../../components/global/menuBar";

export default function Exhibition2 () {


  const gallery = [
    {
      img:'/images/TakahiroYamada/2022yt_1.jpg',
      alt:'Yamada Takahiro.img',
    },
    {
      img:'/images/TakahiroYamada/2022yt_2.jpg',
      alt:'Yamada Takahiro.img',
    },
    {
      img:'/images/TakahiroYamada/2022yt_3.jpg',
      alt:'Yamada Takahiro.img',
    },
    {
      img:'/images/TakahiroYamada/2022yt_4.jpg',
      alt:'Yamada Takahiro.img',
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
            山田貴裕展
          </Heading>
          <Text
            fontWeight='bold'
          >
            Jul,1-31,2022
          </Text>
        </Box>
        
        <VStack
          my='10'
        >
          <Image
            boxSize='200px'
            borderRadius='50%'
            src='/images/TakahiroYamada/yt_prof.jpg'
            alt='museslamu-artist'
          />
          <Heading
            as='h3'
            fontSize='1.25rem'
            py='5'
          >
            山田貴裕
          </Heading>
          <Text
            lineHeight='1.5'
            px='5'
          >
            動物をテーマに、主に猫の白黒ペン画を描いております。
            ほか犬、フクロウ、ぬいぐるみなど、毛のあるものをよく描きます。
            シンプルな画材を通じ、動物の温かみ、いきいきとした様が紙の上に現れることを目指しています。
            コロナをきっかけにデジタルとアナログの融合を模索、『フェルメール猫』シリーズを開始しました。
            本個展では新たに矢代夕稀（やしろゆうき）氏監修のもと、同氏とのコラボ制作を展開。
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