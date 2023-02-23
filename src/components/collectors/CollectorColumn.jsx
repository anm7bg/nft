import { Grid } from "@mui/material";
import Collector from "./Collector";
import styles from "./CollectorColumn.module.scss"

export default function CollectorColumn( { items=[] } ) {

    // items = [
    //     {
    //         name: "Ivan",
    //         nftsCount: 10,
    //         verified: true,
    //         id: 10
    //       },
    //       {
    //         name: "Ivan",
    //         nftsCount: 10,
    //         verified: true,
    //         id: 10
    //       }
    // ]
 
  let classLight = styles.dark;

  let type= "darker";

    return(
        items.map((item, index) => {
            if((index+1) % 2 === 0) {
                classLight = styles.light;
                type="lighter";
            }else {
                classLight = styles.dark;
                type="darker";
            }
            return(
                <div className={classLight}>                    
                    <Grid key={index+1} className={styles.collectors} container spacing={2}>
                        <Grid item className={styles.collectorNumber} xs={1}>
                            {index+1}
                        </Grid>
                        <Grid item className={styles.collectorsList} xs={3}>
                            <Collector 
                                {...item}
                                type={type}
                            />
                        </Grid>
                    </Grid>
                </div>
            )
        })
    );
}