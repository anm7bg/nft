import { CardContent, CardMedia, Chip, Card as MuiCard, Badge } from '@mui/material';
import Avatar from '../avatar/Avatar';
import millify from "millify";
// import {FavoriteIcon, CircleIcon} from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CircleIcon from '@mui/icons-material/Circle';
import styles from "./Card.module.scss";
import Countdown from 'react-countdown';
import { Circle } from '@mui/icons-material';


export default function Card( {
    name = "Some name",
    user = {
        avatar: "/images/avatar.png",
        verified: true,
    }, 
    mediaUrl = "/images/avatar.png", 
    price, 
    currency, 
    likes = 0,
    timeLeft,
    badgeDisplay = {display:"inline-block"},
    size = 50,
    style = styles.card
} )
{

    return(
        <MuiCard id="card" className={style}>
            <Avatar size={size} url={user.avatar} verified={user.verified} /> 
            <Badge 
                component="div" 
                className={styles.badge} 
                style={ badgeDisplay } 
                badgeContent={"Live".toUpperCase()}>
                <CircleIcon />
            </Badge>
            <CardMedia 
                component="img"
                className={styles.media} 
                src={mediaUrl}
                // src="/images/avatar.png"
            />
            <div>
                <Countdown className={styles.countdown} date={Date.now() + timeLeft} onComplete={() => {
                    document.getElementById("card").classList.add(styles.normal)
                    console.log(badgeDisplay)
                    return true
                }
                    }/>
            </div>
            <div className={styles.titleContainer}>
                <div className={styles.titleAndPrice}>
                    <h2 className={styles.title}>{name}</h2>
                   <p className={styles.price}>~{price} {currency}</p>
                </div>
                <div className={styles.likes}>
                    <Chip icon={<FavoriteIcon />} className={styles.likesChip} label={millify(likes)} variant="outlined" />
                </div>
            </div>
        </MuiCard>
    );
}