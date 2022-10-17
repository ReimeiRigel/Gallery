import styles from '../styles/Company.module.css'
import { Box } from "@chakra-ui/react";
import { Pccompany } from "../components/company/pcCompany";
import { Footer } from "../components/global/footer";
import { Header } from "../components/global/header";
import { Spfooter } from '../components/global/spFooter';
import { Spprivacy } from '../components/privacy/spPrivacy';
import { Spcompany } from '../components/company/spCompany';

export default function Company () {
  return(
    <Box>
      
      <Box className={styles.pc}>

        <Header />

        <Pccompany />

        <Footer />

      </Box>

      <Box className={styles.sp}> 

        <Header />

        <Spcompany />
      
        <Spfooter />
      
      </Box>      

    </Box>
  )
}