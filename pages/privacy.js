import styles from '../styles/Privacy.module.css'
import { Box } from "@chakra-ui/react";
import { Footer } from "../components/global/footer";
import { Header } from "../components/global/header";
import { Pcprivacy } from "../components/privacy/pcPrivacy";
import { Spfooter } from '../components/global/spFooter';
import { Spprivacy } from '../components/privacy/spPrivacy';

export default function Privacy () {
  return(
    <Box>

      <Box className={styles.pc}>

        <Header />

        <Pcprivacy />

        <Footer />

      </Box>

      <Box>

        <Header />

        <Spprivacy />

        <Spfooter />

      </Box>

    </Box>
  )
}