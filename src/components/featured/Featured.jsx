import styles from "./Featured.module.scss";
import classNames from "classnames";
import { Container, ImageList, ImageListItem } from "@mui/material";
import { useRouter } from 'next/router'

export default function Featured( { items =[] } ) {


    let firstImg = items[0];

    let listImages = items.slice(1);

    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault()
        // router.push(href)
        console.log(href);
      }

    //   console.log(firstImg);
    //   console.log(listImages);

    return (
        <div className={classNames(styles.wrapper)}>
        <Container className={classNames(styles.container)} maxWidth="xl">
          <ImageList 
          className={styles.imageList}
          rows={ 4 }
          cols={ 6 }
          >
            <ImageListItem
            // key={1}
            rows={ firstImg.rows }
            cols={ firstImg.cols }
            >
                <img 
                src={ firstImg.image } 
                alt={ firstImg.title } 
                onClick={ () => router.push(firstImg.href)}/>
            </ImageListItem>
           
            {listImages.map((item, index) => (
            <ImageListItem key={index}>
                <img
                    src={ item.image }
                    alt={ item.title }
                    loading="lazy"
                    onClick={ () => router.push(item.href) }
                />
                </ImageListItem>
            ))}
          </ImageList>
        </Container>
      </div>
    );
}