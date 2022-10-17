import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export function Spcontact() {
  return(
    <Box
      bg='#6a9231'
      color='white'
      fontWeight='bold'
    >
      <Heading
        as='h3' 
        size='4xl'
        ml='3'
        pt='8'
        pb='10'
      >
        Contact
      </Heading>
      <VStack
        textAlign='center'
      >
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.207153424612!2d135.49655531523223!3d34.699954680434615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e6ed2241a467%3A0x588c4d8bc438e0dd!2z44Ku44Oj44Op44Oq44O844KJ44KA44O8!5e0!3m2!1sja!2sjp!4v1665984022030!5m2!1sja!2sjp" 
          width="400" 
          height="300" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <Text
          pt='3'
          textAlign='center'
        >
          〒530-0001 大阪市北区梅田1-11-4 大阪駅前第4ビル1階24          
        </Text>
        <Text
          fontSize='0.85rem'
        >
          OPEN : 11:00 ~ 18:00 ＜土日、祝 休廊＞<br />
          展示最終日は17:00まで
        </Text>
        <Box
          pt='2'
          pb='10'
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
      </VStack>
    </Box>
  )
}