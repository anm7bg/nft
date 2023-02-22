import Collector from "../collector/Collector";
import User from "../user/user";
import styles from "./CollectorsColumn.module.scss"

export default function CollectorsColumn({ items=[] }) {
 
    return(
        users.map((item, index) => {
            if(index % 2 === 0) {
                document.querySelector("CollectorsList").classList.add(styles.light);
                type="lighter";
            }else {
                type="darker"
            }
            <div className={styles.CollectorsList}>
                <div className={styles.collectorNumber}>
                    {index}
                </div>
                <div className={styles.collectorsList}>
                    <Collector 
                        key={index}
                        name={item.name}
                        info={ item.nftsCount + " Items" }
                        avatar={ avatar }
                        verified={ verified }
                        type={ type }
                    />
                </div>
            </div>
        })
    );
}