import { Container, Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Card from '../card/Card';


export default function Trending({ cards=[], }) {


 cards = [
      {
         "name":"Ivy",
         "user":{
            "avatar":{
               "url":"images/avatar.png"
            },
            "verified":true
         },
         "mediaUrl":"images/nft.jpg",
         "price":1,
         "currency":"ETH"
      },
      {
         "name":"Judie",
         "user":{
            "avatar":{
               "url":"images/avatar.png"
            },
            "verified":true
         },
         "mediaUrl":"images/nft.jpg",
         "price":2.3,
         "currency":"ETH"
      },
      {
         "name":"Juniper",
         "user":{
            "avatar":{
               "url":"images/avatar.png"
            },
            "verified":true
         },
         "mediaUrl":"images/nft.jpg",
         "price":5,
         "currency":"ETH"
      },
      {
         "name":"Maple",
         "user":{
            "avatar":{
               "url":"images/avatar.png"
            },
            "verified":true
         },
         "mediaUrl":"images/nft.jpg",
         "price":10,
         "currency":"ETH"
      }
   ];
   {cards.slice(0, 4).map((card, index) => (

    console.log({...card})
   ))}
    return(
        <div>
            <Container>
                <div><h1>Trending</h1></div>
                <div>
                <FormControl fullWidth>
                    <InputLabel id="simple-select-label">Age</InputLabel>
                    <Select
                        labelId="simple-select-label"
                        id="demo-simple-select"
                        value=""
                        label="This week"
                        // onChange={handleChange}
                    >
                        <MenuItem value={"one"}>Ten</MenuItem>
                        <MenuItem value={"two"}>Twenty</MenuItem>
                        <MenuItem value={"three"}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                </div>
            </Container>
           
            <Grid container>
                {/* {cardsMap()} */}
                {cards.slice(0, 4).map((card, index) => (
                <Grid item md={3} key={index}>
                    <Card {...card} />
                </Grid>
                ))}              
            </Grid>
        </div>
    );
}