import Avatar from "../avatar/Avatar";
import styles from "./User.module.scss";

export default function User( {avatar, name, info, size=55, verified} ) {

    return(
        <div className={styles.user}>
            <Avatar size={size} verified url={avatar}/>
            <div className={styles.userInfo}>
                <p className={styles.name}>{name}</p>
                <p className={styles.info}>{info}</p>
            </div>
        </div>
    );
}