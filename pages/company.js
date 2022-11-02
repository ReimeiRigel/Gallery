import styles from '../styles/Company.module.css'
import { Box } from "@chakra-ui/react";
import { Pccompany } from "../components/company/pcCompany";
import { Menubar } from '../components/global/menuBar'
import { Spfooter } from '../components/global/spFooter';
import { Spcompany } from '../components/company/spCompany';
import { Spheader } from '../components/global/spHeader';

export default function Company () {
  return(
    <Box>
      
      <Box className={styles.pc}>

        <Menubar />

        <Spheader />

        <Pccompany />

        <Spfooter />

      </Box>

      <Box className={styles.sp}> 

        <Menubar />

        <Spheader />

        <Spcompany />
      
        <Spfooter />
      
      </Box>      

    </Box>
  )
}