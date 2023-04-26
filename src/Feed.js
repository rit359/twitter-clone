import React, { useEffect, useState } from "react";
import "./Feed.css";
import db from "./firebase";
import Post from "./Post";
import TweetBox from "./TweetBox";
// import TweetBox from "./TweetBox";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log(db)
    db.collection('posts').onSnapshot(snapshot =>{
        console.log(snapshot.docs);
        setPosts(snapshot.docs.map(doc=>doc.data()));
    })
  }, []);
  

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox/>
      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>

  );
}

export default Feed;
