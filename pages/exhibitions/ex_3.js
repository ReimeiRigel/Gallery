import { Box, Container, Divider, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Spheader } from "../../components/global/spHeader";
import { Spfooter } from "../../components/global/spFooter";
import { Menubar } from "../../components/global/menuBar";

export default function Exhibition2 () {


  const gallery = [
    {
      img:'/images/MiyabiKatayama/2022km_1.jpeg',
      alt:'Miyabi Katayamaimg',
    },
    {
      img:'/images/MiyabiKatayama/2022km_2.jpeg',
      alt:'Miyabi Katayamaimg',
    },
    {
      img:'/images/MiyabiKatayama/2022km_3.jpeg',
      alt:'Miyabi Katayamaimg',
    },
    {
      img:'/images/MiyabiKatayama/2022km_4.jpeg',
      alt:'Miyabi Katayamaimg',
    },
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
          うちに帰ろう
        </Heading>
        <Text
          fontWeight='bold'
        >
          Oct.22-29,2022
        </Text>
      </Box>
      
      <VStack
        my='10'
      >
        <Image
          boxSize='200px'
          borderRadius='50%'
          src='/images/MiyabiKatayama/km_prof.png'
          alt='museslamu-artist'
        />
        <Heading
          as='h3'
          fontSize='1.25rem'
          py='5'
        >
          片山 みやび
        </Heading>
        <Text
          lineHeight='1.5'
          px='5'
        >
          わたしの作品は、いつも身近にあるものや自然がテーマです。
          身のまわりの慣れ親しんだものたち、近くに感じる存在、そしてわたしを育んだ環境。
          それらへの愛おしさ、安心、癒し、満たされることで見出すこれから。
          作品を生み出す過程は、わたし自身にときに生まれるスキマを埋めて再生し、さらに新しい「わたし」を生み出していく気がします。
          これら作品に接した方にも、この感覚が伝わるなら本当に幸せです。
          今回は、新作を中心にガラスレリーフ、ドローイング、ガラスをコラージュしたタブローを構成した展示になります。 お楽しみいただけますように。
        </Text>
      </VStack>

      <Divider/>

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