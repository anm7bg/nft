import styles from "./ProductInfoStatus.module.scss";

export default function ProductInfoStatus({ }) {
    
    return(
        <div className={styles["product-info-status"]}>
                    <Chip 
                        icon={<FavoriteIcon />} 
                        className={styles.status} 
                        label="status"
                        variant="outlined"
                    />
        </div>
    );
}