import { Box, Center, Container, Heading, Text, VStack } from "@chakra-ui/react";

export function Contact() {
  return(
    <Box>
      <Container
        maxW='3xl'
      >
        <VStack
          py='10'
        >
          <Heading
            fontSize='1.5rem'
          >
            ACCESS
          </Heading>
          <Text
            fontSize='.85rem'
            fontWeight='bold'
          >
            アクセス&コンタクト
          </Text>
        </VStack>
        
        <Box>
          <Center>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.207153424612!2d135.49655531523223!3d34.699954680434615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e6ed2241a467%3A0x588c4d8bc438e0dd!2z44Ku44Oj44Op44Oq44O844KJ44KA44O8!5e0!3m2!1sja!2sjp!4v1665984022030!5m2!1sja!2sjp" 
              width="1000" 
              height="250" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </Center>

          <Box
            ml='5'
            py='8'
            fontWeight='bold'
          >
            <Text>
              〒530-0001 大阪市北区梅田1-11-4 <br />
              大阪駅前第4ビル1階24 
            </Text>
            <Text
              mt='3'
            >
              【営業時間】 11:00 ~ 18:00 ＜土日、祝 休廊＞<br />
              【展示会中】 11:00 ~ 19:00 ＜無休＞<br />
              ※展示最終日は17時まで
            </Text>
            <Box
              mt='3'
            >
              <a href='tel:0663446766'>
                <Text
                  fontSize='0.85rem'
                >
                  TEL : 06-6344-6766 / 06-6344-7603 (Fax兼)
                </Text>
              </a>
              <a href='mailto:museslamu@miracle.ocn.ne.jp'>
                <Text
                  fontSize='0.85rem'
                >
                  MAIL : museslamu@miracle.ocn.ne.jp
                </Text>
              </a>
            </Box>
          </Box>
        
        </Box>

      </Container>
    </Box>
  )
}