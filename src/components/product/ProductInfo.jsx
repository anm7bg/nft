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

    let live = {display:"none"};

    isLive ? live = {display:"block"} : live = {display:"none"}

    console.log(isLive)
    console.log(live)

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
                <div style={ live }>
                    <ProductInfoStatus />
                </div>
            </Grid>

        </div>
    );
}