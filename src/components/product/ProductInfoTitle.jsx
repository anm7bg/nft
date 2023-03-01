import { Typography } from "@mui/material";
import styles from "./ProductInfoTitle.module.scss"

export default function ProductInfoTitle({ text="Test" }) {

    return(
        <div className={styles["product-info-title"]}>
            <Typography className={styles.title} variant={"h2"}>
                {text}
            </Typography>
        </div>
    );
}