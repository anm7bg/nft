import styles from "./ProductInfoLikes.module.scss";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Chip } from "@mui/material";
import millify from "millify";


export default function ProductInfoLikes({ amount=0 }) {

    return(
        <div className={styles["product-info-likes"]}>
                    <Chip 
                        icon={<FavoriteIcon />} 
                        className={styles.likes} 
                        label={millify(amount)} 
                        variant="outlined"
                    />
                    
        </div>
    );
}