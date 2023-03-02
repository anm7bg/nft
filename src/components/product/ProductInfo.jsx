import { Grid, Stack } from "@mui/material";
import styles from "./ProductInfo.module.scss";
import ProductInfoTitle from "./ProductInfoTitle";
import ProductInfoPrice from "./ProductInfoPrice";
import ProductInfoLikes from "./ProductInfoLikes";
import ProductInfoCreator from "./ProductInfoCreator";
import ProductInfoTimer from "./ProductInfoTimer";
import ProductInfoStatus from "./ProductInfoStatus"

export default function ProductInfo({ 
    title,
    creator,
    price,
    currency,
    likes,
    onTimeEnd,
    timeEnd,
    isLive
} ) {

    return(
        <div className={styles["product-info"]}>
            <ProductInfoTitle text={title} />
            <Stack spacing={2} className={styles.stats}>
                <ProductInfoPrice amount={price} currency={currency} />
                <ProductInfoLikes amount={likes} />
            </Stack>
            <Grid container spacing={2}>
                <Grid item xs={7}>
                    <ProductInfoCreator {...creator} />
                </Grid>
                <Grid item xs={5}>
                    <ProductInfoTimer onTimeEnd={onTimeEnd} timeEnd={timeEnd} />
                </Grid>
                {isLive && <ProductInfoStatus />}
            </Grid>

        </div>
    );
}