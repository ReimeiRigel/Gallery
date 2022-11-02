import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

export function Spheader () {
  return (
    <Box
      py='10'
      textAlign='center'
      bg='#00aacc'
      color='white'
    >
      <Link href="/">
        <a>
          <Heading>
            Gallery La-Mu
          </Heading>
          <Text
            fontWeight='bold'
            fontSize='.75rem'
          >
            ギャラリー　ら・むー
          </Text>
        </a>
      </Link>
    </Box>
  )
}