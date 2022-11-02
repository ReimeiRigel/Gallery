import styles from '../styles/Privacy.module.css'
import { Box } from "@chakra-ui/react";
import { Menubar } from '../components/global/menuBar'
import { Pcprivacy } from "../components/privacy/pcPrivacy";
import { Spfooter } from '../components/global/spFooter';
import { Spprivacy } from '../components/privacy/spPrivacy';
import { Spheader } from '../components/global/spHeader';

export default function Privacy () {
  return(
    <Box>

      <Box className={styles.pc}>

        <Menubar />

        <Spheader />

        <Pcprivacy />

        <Spfooter />

      </Box>

      <Box className={styles.sp}>

        <Menubar />

        <Spheader />

        <Spprivacy />

        <Spfooter />

      </Box>

    </Box>
  )
}