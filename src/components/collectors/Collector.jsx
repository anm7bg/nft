
import User from "../user/User";
import styles from "./Collector.module.scss"

export default function Collector( { name, avatar, verified, type="darker", nftsCount, size} ) {

    // name ="Ivan"

    return(
        <div className={styles.container}>
            <User name={name} info={nftsCount + " Items"} avatar={avatar} verified={verified} size={size}/>
            {/* <User name={name} info={nftsCount + "Items"} /> */}
        </div>
    );
}