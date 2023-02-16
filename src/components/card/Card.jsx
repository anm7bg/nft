import { CardContent, CardMedia, Chip, Card as MuiCard, CardActions } from '@mui/material';
// import {} from '@mui/material/Card';
import Avatar from '../avatar/Avatar';
import millify from "millify";
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from "./Card.module.scss";


export default function Card( {url, verified, mediaUrl, name, price, currency, likes=0} ) {

    return(
        <MuiCard className={styles.card}>
            <Avatar className={styles.avatar} url={url} verified={verified} />
            {/* <CardMedia className={styles.media}
                image={mediaUrl} >
            </CardMedia> */}
            <img className={styles.media} src={mediaUrl}></img>
            <CardContent>
                <h2 className='title'>{name}</h2>
                <p className='price'>~{price} {currency}</p>
            </CardContent>
            
            <Chip icon={<FavoriteIcon />} className="likes" label={millify(likes)} variant="outlined" />
        </MuiCard>
    );
}