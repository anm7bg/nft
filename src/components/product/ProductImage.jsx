import styles from "./ProductImage.module.scss"

export default function ProductImage({url, alt}) {

    return(
        <div className={styles.productImage}>
            <img className={image} src={url} alt={alt} />
        </div>
    );
}