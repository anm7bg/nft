import Avatar from "../avatar/Avatar";
import styles from "./User.module.scss";

export default function User( {name="", info="", avatar="", size=55, verified=false} ) {

    return(
        <div className={styles.user}>
            <Avatar size={size} />
            <div className={styles.userInfo}>
                <p className={styles.name}>{name}</p>
                <p className={styles.info}>{info}</p>
            </div>
        </div>
    );
}