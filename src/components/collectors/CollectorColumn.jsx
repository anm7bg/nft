import Collector from "./Collector";
import styles from "./CollectorColumn.module.scss"

export default function CollectorColumn( { items=[] } ) {

    items = [
        {
            name: "Ivan",
            nftsCount: 10,
            verified: true,
            id: 10
          },
          {
            name: "Ivan",
            nftsCount: 10,
            verified: true,
            id: 10
          }
    ]
 
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
                    <div className={styles.collectors}>
                        <div className={styles.collectorNumber}>
                            {index}
                        </div>
                        <div className={styles.collectorsList}>
                            <Collector 
                                // key={index}
                                name={item.name}
                                // info={ item.nftsCount + " Items" }
                                nftsCount={ item.nftsCount}
                                avatar={ item.avatar }
                                verified={ item.verified }
                                type={type}
                            />
                        </div>
                    </div>
                </div>
            )
        })
    );
}