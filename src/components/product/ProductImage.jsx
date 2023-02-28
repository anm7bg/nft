import styles from "./ProductImage.module.scss"

export default function ProductImage({url, alt}) {

 
    return(
        <div className={styles["product-image"]}>
            <img className={styles.image} src={url} alt={alt} />
        </div>
    );
}