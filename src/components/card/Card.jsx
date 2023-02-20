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
    name,
    user = {
        avatar: "/images/avatar.png",
        verified: true,
    }, 
    mediaUrl, 
    price, 
    currency, 
    likes = 0,
    timeLeft,
} )
{

    let badgeDisplay = {display:"inline-block"};

    let DefaultCard = () => <p>{console.log(Countdown)}</p>;
    // if (Countdown.props)
    console.log(Countdown);

    return(
        <MuiCard id="card" className={styles.card}>
            <Avatar url={user.avatar} verified={user.verified} /> 
            <Badge className={styles.badge} style={ {badgeDisplay} } badgeContent={"Live".toUpperCase()}>
              <CircleIcon />
            </Badge>
            <CardMedia 
                component="img"
                className={styles.media} 
                src={mediaUrl}
            />
            <div>
                <Countdown className={styles.countdown} date={Date.now() + timeLeft} onComplete={() => {
                    document.getElementById("card").classList.add(styles.normal)
                    console.log(badgeDisplay)
                    return true
                }
                    }/>
            </div>
            <h2 className={styles.title}>{name}</h2>
            <p className='price'>~{price} {currency}</p>
            <Chip icon={<FavoriteIcon />} className={styles.likes} label={millify(likes)} variant="outlined" />
        </MuiCard>
    );
}