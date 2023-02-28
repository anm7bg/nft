import { Chip } from "@mui/material";
import LiveIcon from "@mui/icons-material/FiberManualRecord";
import styles from "./ProductInfoStatus.module.scss";

export default function ProductInfoStatus({ }) {
    
    return(
        <div className={styles["product-info-status"]}>
                    <Chip 
                        icon={<LiveIcon />} 
                        className={styles.status} 
                        label={"Live".toUpperCase()}
                        variant="outlined"
                    />
        </div>
    );
}