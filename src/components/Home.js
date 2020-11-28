import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  useEffect(() => {
    const fetchTweets = async () => {
        //makes request to backend 
        //backend responds and we set it equal to res
      const res = await axios.get("http://localhost:3001");
      const tweets = res.data
      setTweets(tweets)
      console.log(res);
    };
    fetchTweets();
  }, []);

  const [tweets, setTweets] = useState([]);

  return(
  <div>
      {
          //for each tweet we get a description
          tweets.map(tweet => (
          <p>{tweet.description}</p>
          ))
      }
      Home
      
      
      </div>);
}

export default Home;
