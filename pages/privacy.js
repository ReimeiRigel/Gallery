import { Box } from "@chakra-ui/react";
import { Footer } from "../components/global/footer";
import { Header } from "../components/global/header";
import { Pcprivacy } from "../components/privacy/pcPrivacy";

export default function Privacy () {
  return(
    <Box>

      <Header />

      <Pcprivacy />

      <Footer />

    </Box>
  )
}