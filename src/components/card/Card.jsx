import { CardContent, CardMedia, Chip } from '@mui/material';
import Card from '@mui/material/Card';
import Avatar from '../avatar/Avatar';
import millify from "millify";
import { FavoriteIcon } from '@mui/icons-material';

export default function Card(url, verified, mediaUrl, title, price, currency, likes=0  ) {

    return(
        <Card className="card">
            <Avatar url={url} verified={verified} />
            <CardMedia className='media'>
                image={mediaUrl}
            </CardMedia>
            <CardContent>
                <h2 className='title'>{title}</h2>
                <p className='price'>{price}{currency}</p>
                <Chip icon={<FavoriteIcon />} className="likes" label="Chip Outlined" variant="outlined">millify({likes})</Chip>
            </CardContent>
        </Card>
    );
}