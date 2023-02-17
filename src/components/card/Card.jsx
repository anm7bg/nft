import { CardContent, CardMedia, Chip, Card as MuiCard, CardActions } from '@mui/material';
// import {} from '@mui/material/Card';
import Avatar from '../avatar/Avatar';
import millify from "millify";
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from "./Card.module.scss";


export default function Card( {name=String, url, verified, mediaUrl, price, currency, likes=0} ) {

    return(
        <MuiCard className={styles.card}>
            <Avatar className={styles.avatar} url={url} verified={verified} />
            <img className={styles.media} src={mediaUrl}></img>
            <div className={styles.title}>{name}</div>
            <p className='price'>~{price} {currency}</p>
            <Chip icon={<FavoriteIcon />} className="likes" label={millify(likes)} variant="outlined" />
        </MuiCard>
    );
}