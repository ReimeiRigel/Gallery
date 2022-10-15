import { Box, Container, Heading, Text } from "@chakra-ui/react";

export function Footer() {
  return(
    <Box
      h='180px'
      bg='#6a9231'
      color='white'
      fontWeight='bold'
    >
      <Container
        maxW='container.xl'
        display='flex'
        justifyContent='space-around'
        py='5'
      >
        <Heading
         as='h4'
         size='lg'
        >
          Gallery La・Mu-
        </Heading>
        <Box>
          <Heading
            as='h6'
            size='md'
          >
            CONTACT
          </Heading>
          <Text
            fontSize='0.85rem'
            mt='2'
          >
            〒530-0001<br />
            大阪市北区梅田1-11-4 大阪駅前第4ビル1階24
          </Text>
          <Box
            mt='2'
          >
            <a href='tel:0663446766'>
              <Text
                fontSize='0.85rem'
              >
                TEL : 06-6344-6766 / 06-6344-7603 (Fax兼)
              </Text>
            </a>
          </Box>
          <Box
            mt='2'
          >
            <a href='mailto:museslamu@miracle.ocn.ne.jp'>
              <Text
                fontSize='0.85rem'
              >
                MAIL : museslamu@miracle.ocn.ne.jp
              </Text>
            </a>
          </Box>
        </Box>
        <Box>
          <Heading
            as='h6'
            size='md'
          >
            INFO
          </Heading>
          <Text
            mt='2'
            fontSize='0.85rem'
          >
            OPEN : 11:00 ~ 18:00 ＜土日、祝 休廊＞ <br />
            展示会により営業時間等変更する場合がございます
          </Text>
        </Box>

      </Container>
    </Box>
  )
}