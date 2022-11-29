import React, { useState, useEffect } from "react";
import TweetBox from "../Views/TweetBox";
import '../CSS/Feed.css';
import Post from "../Views/Post.js";
import Profile from "../Images/profiletest.png";
import test2 from "../Images/bookmark.png";
import {db} from "./firebase.js";
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"

function Feed() {
    const [posts, setPosts] = useState({});

    // useEffect(() => {
    //     const q = query(collection(db, 'posts'), orderBy('created', 'desc'))
    //     onSnapshot(q, (querySnapshot) => {
    //       setPosts(querySnapshot.docs.map(doc => ({
    //         display: doc.display,
    //         username: doc.username,
    //         checkmark: doc.checkmark,
    //         text: doc.text,
    //         image: doc.image
    //       })))
    //     })
    //   },[])

    return (
        <div className="feed">
            {/* Header */}
            <div className="feed_header">
                <h2>Home</h2> 
            </div>

            {/* TweetBox */}
            <TweetBox/>
            {/* Post */}

        {/* {posts.map((post) => (
          <Post
            display={post.display}
            username={post.username}
            checkmark={post.checkmark}
            text={post.text}
            image={post.image}
          />
        ))} */}


            <Post
                display="Joshua Wu"
                username="jo4467"
                checkmark={true}
                text="I love Overwatch. I swear on me mum that I will play this game until I wins!"
                image="https://media.tenor.com/qIM8hK5MOMIAAAAC/overwatch.gif"
            />
            <Post
                display="Jason Lei"
                username="JayC"
                checkmark={false}
                text="I love JoJo. I swear on me mum that I will keep watching until the end!"
                image="https://media.tenor.com/JTudmgcE8ZIAAAAd/giorno-giovanna-jojo.gif"
            />

        </div>
    )
}

export default Feed