import { string } from "prop-types";
import User from "../../components/user/User";
import styles from "./ProductInfoCreator.module.scss";

export default function ProductInfoCreator({

    name = "Ivan",
    avatar = "/images/avatar.png",
    verified = false

}) {

    return(
        <div className={styles["product-info-creator"]}>
            <h3 className={styles.title}>Creator</h3>
            <div className={styles["user-container"]}>
                <User name={name} avatar={avatar} verified={verified} />
            </div>
        </div>
    );
}