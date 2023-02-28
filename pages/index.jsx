import Example from "../src/components/example/Example";
import Header from "../src/components/header/Header"
import Featured from "../src/components/featured/Featured"
import Trending from "../src/components/trending/Trending"
import dataFeatured from "../data/featured.json";
import dataTrending from "../data/trending.json"
import dataUsers from "../data/users.json";
import dataAuctions from "../data/nfts.json"
import { useState, useEffect } from "react";
import TopCollectors from "../src/components/collectors/TopCollectors";
import How from "../src/components/how/How";
import Auctions from "../src/components/auctions/Auctions";
import styles from "../src/components/card/Card.module.scss";
import Footer from "../src/components/footer/Footer";
// const [topCollectors, setTopCollectors] = useState([]);


export default function Index() {

  const [featuredCards, setFeaturedCards] = useState([]);
      useEffect(() => {
       setFeaturedCards(dataFeatured);
  }, []);

  const [trendingCards, setTrendingCards] = useState([]);
    useEffect(() => {
    setTrendingCards(
      dataTrending.map((item) => {
        return{
          name: item.name,
          user: {
            avatar: item.owner.avatar.url,
            verified: item.owner.verified
          }, 
          mediaUrl: item.mediaUrl, 
          price: item.price, 
          currency: item.currency, 
          likes: item.likes
        };
      })
    );
  }, []);

  // console.log(trendingCards);


const [collectors, setTopCollectors] = useState([]);
  useEffect(() => {
    setTopCollectors(
      dataUsers.map((user) => {
        // key++
        return{
          name: user.username,
          nftsCount: user.nfts.length,
          avatar: user.avatar.url,
          verified: user.verified,
          // key: key
        };
      })
  );
}, []);

const [nFTS, setNFTS] = useState([]);
  useEffect(() => {
  setNFTS(
    dataAuctions.map((item) => {
      return{
        name: item.name,
        user: {
            avatar: item.owner.avatar.url,
        }, 
        mediaUrl: item.source.url, 
        price: item.price, 
        currency: item.currency, 
        likes: item.likes,
        timeLeft: Math.abs(Date.parse(item.auction_end) - Date.now()),
      };
    })
    );
}, []);


const how = {
  description: `"Discover, collect, and sell extraordinary NFTs
  on the world's first & largest NFT marketplace. There are  three things you'll need in place to open your account and start buying or selling NFTs on BUM."`,
  title: "HOW IT WORKS",
  items:[
     {
        title: "Digital Currency",
        description: "You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange"
     },
     {
      title: "Crypto Wallet",
      description: "A crypto wallet, such as MetaMask, stores your ETH and processes transactions on the Ethereum blockchain."
    },
    {
      title: "BUM.",
      description: "Let's connect your wallet to BUM, edit your profile, and begin interacting in the space. "
   }
  ],
  link: "#"
};
    
  let topCollectors = collectors
  .sort((f, s) => s.nftsCount - f.nftsCount)
  .slice(0, 12);

  // topCollectors.map((item, index) => item.key = index + 1);
  
  // console.log(how)
  return(
    <>
      <Header type="normal"></Header>
      {/* <Featured/> */}
      <Featured items={featuredCards}/>
      <Trending cards={ trendingCards }/>
      <TopCollectors collectors={topCollectors} />
      <How 
        description = { how.description }
        title = { how.title }
        items = { how.items }
        link = { how.link }
      />
      <Auctions cards={nFTS} style={styles.auction} />
      <Footer />
    </>
  );
}
