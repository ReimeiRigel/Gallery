import { Box } from "@chakra-ui/react";
import { Pccompany } from "../components/company/pcCompany";
import { Footer } from "../components/global/footer";
import { Header } from "../components/global/header";

export default function Company () {
  return(
    <Box>

      <Header />

      <Pccompany />
      
      <Footer />

    </Box>
  )
}