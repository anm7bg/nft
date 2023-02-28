import styles from "./ProductImage.module.scss"

export default function ProductImage({url, alt}) {

    return(
        <div className={styles.product_image}>
            <img className={image} src={url} alt={alt} />
        </div>
    );
}