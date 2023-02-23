
import User from "../user/User";
import styles from "./Collector.module.scss"

export default function Collector( {name, avatar, verified, type="darker", nftsCount} ) {

    // name ="Ivan"

    return(
        <div className={styles.container}>
            <User name={name} info={nftsCount + " Items"} avatar={avatar} verified={verified}/>
            {/* <User name={name} info={nftsCount + "Items"} /> */}
        </div>
    );
}