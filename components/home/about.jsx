import { Box, Container, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

export function About() {
  return(
    <Box
      bg='#6a9231'
      color='white'
    >
      <Container
        maxW='container.lg'
        height='100vh'
        display='flex'
        justifyContent='space-around'
        alignItems='center'
      >
        <Heading
          w='50%'
          as='h3' 
          size='4xl'
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
          <Text
            lineHeight='175%'
          >
            わたしの作品は、いつも身近にあるものや自然がテーマです。<br />
            身のまわりの慣れ親しんだものたち、近くに感じる存在、そしてわたしを育んだ環境。<br />それらへの愛おしさ、安心、癒し、満たされることで見出すこれから。<br />
            作品を生み出す過程は、わたし自身にときに生まれるスキマを埋めて再生し、さらに新しい「わたし」を生み出していく気がします。<br />
            これら作品に接した方にも、この感覚が伝わるなら本当に幸せです。<br />
            今回は、新作を中心にガラスレリーフ、ドローイング、ガラスをコラージュしたタブローを構成した展示になります。 お楽しみいただけますように。
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}