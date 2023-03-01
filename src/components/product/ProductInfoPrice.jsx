import styles from "./ProductInfoPrice.module.scss"

export default function ProductInfoPrice({ amount=0, currency="ETH" }) {
    
    return(
        <div className={styles["product-info-price"]}>
            <p>{amount}{currency}</p>
        </div>
    );
}