import { Box, Container, Heading, Text, HStack, Center, Divider } from "@chakra-ui/react";

export function Spfooter() {
  return (
    <Box>
      <Box
        h='50px'
        bg='#00aacc'
        color='white'
        fontWeight='bold'
        display='flex'
        justifyContent='center'
      >
        <Center as='sub'>
          Copyright (C) 2022 muses la mu Co.,Ltd.
        </Center>
      </Box>
    </Box> 
  )
}