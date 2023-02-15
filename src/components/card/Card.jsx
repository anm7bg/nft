import { CardContent, CardMedia, Chip } from '@mui/material';
import Card from '@mui/material/Card';
import Avatar from '../avatar/Avatar';
import millify from "millify";
import { FavoriteIcon } from '@mui/icons-material';

export default function Card( {url, verified, mediaUrl, title, price, currency, likes=0} ) {
    // let label = 

    return(
        <Card className="card">
            <Avatar url={url} verified={verified} />
            <CardMedia className='media'>
                image={mediaUrl}
            </CardMedia>
            <CardContent>
                <h2 className='title'>{title}</h2>
                <p className='price'>{price}{currency}</p>
                <Chip icon={<FavoriteIcon />} className="likes" label={millify({likes})} variant="outlined"></Chip>
            </CardContent>
        </Card>
    );
}