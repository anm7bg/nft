import User from "../user/user";
import styles from "./Collector.module.scss"

export default function Collector( {name, avatar, verified, type, nftsCount} ) {

    return(
        <div className={styles.container}>
            <User info={nftsCount + "Items"} />
        </div>
    );
}