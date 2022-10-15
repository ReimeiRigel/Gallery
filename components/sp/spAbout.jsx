import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";

export function Spabout() {
  return(
    <Box
      bg='#6a9231'
      color='white'
    >
      <Heading
        as='h3' 
        size='4xl'
        ml='3'
        py='8'
      >
        Artist
      </Heading>
      <VStack
        textAlign='center'
        alignItems='center' 
      >
        <Box>
          <Image
            boxSize='150px'
            src='images/profImg.png'
            alt='museslamu-artist'
          />
        </Box>
        <Text
          fontSize='1.5rem'
          fontWeight='bold'
        >
          片山 みやび<br />
          Katayama Miyabi
        </Text>
      </VStack>
      <Text
        mt='5'
        pb='50px'
        mx='5'
        fontWeight='bold'
        lineHeight='175%'
      >
        わたしの作品は、いつも身近にあるものや自然がテーマです。
        身のまわりの慣れ親しんだものたち、近くに感じる存在、そしてわたしを育んだ環境。それらへの愛おしさ、安心、癒し、満たされることで見出すこれから。
        作品を生み出す過程は、わたし自身にときに生まれるスキマを埋めて再生し、さらに新しい「わたし」を生み出していく気がします。
        これら作品に接した方にも、この感覚が伝わるなら本当に幸せです。
        今回は、新作を中心にガラスレリーフ、ドローイング、ガラスをコラージュしたタブローを構成した展示になります。 お楽しみいただけますように。
      </Text>
      
    </Box>
  )
}