import Avatar from "../avatar/Avatar";
import styles from "./User.module.scss";

export default function User({name=" ", info=" ", avatar=" ", size=55, verified=false}) {

    console.log("test")
    console.log("name ",name ," info ",info);
    // console.log(styles)

    return(
        <div className={styles.user}>
            <Avatar />
            <div className={styles.userInfo}>
                <p className={styles.name}>{name}</p>
                <p className={styles.info}>{info}</p>
            </div>
        </div>
    );
}