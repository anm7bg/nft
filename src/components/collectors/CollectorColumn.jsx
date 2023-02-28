import { Container, Grid } from "@mui/material";
import Collector from "./Collector";
import styles from "./CollectorColumn.module.scss"

export default function CollectorColumn( { items=[], size } ) {

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

  let number = 0;

    return(
        items.map((item, index) => {
            number = index + 1;
            if((index+1) % 2 === 0) {
                classLight = styles.light;
                type="lighter";
            }else {
                classLight = styles.dark;
                type="darker";
            }
            return(
                <div className={classLight}>                    
                    <div key={index+1} className={styles.collectors}>
                        <div className={styles.collectorNumber}>
                            <p>
                                {item.id}
                            </p>
                        </div>
                        <div className={styles.collectorsList}>

                            <Collector 
                                {...item}
                                size={size}
                                type={type}
                            />
                        </div>
                    </div>
                </div>
            )
        })
    );
}