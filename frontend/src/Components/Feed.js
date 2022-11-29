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
                profile="https://cdn.discordapp.com/avatars/228818984340815872/73c1b9a69068e99776da7d0e469e451e.webp?size=128"
            />
            <Post
                display="Jason Lei"
                username="JayC"
                checkmark={false}
                text="I love JoJo. I swear on me mum that I will keep watching until the end!"
                image="https://media.tenor.com/JTudmgcE8ZIAAAAd/giorno-giovanna-jojo.gif"
                profile="https://cdn.discordapp.com/avatars/454323721637855232/471a56b78d842a02f46df863cad24551.webp"
            />
            <Post
                display="Robert Langer"
                username="BeonyondBurger"
                checkmark={false}
                text="Good Book!"
                image="https://static.wixstatic.com/media/a63a11_2d89fae362414287a9ff739ba21d59d8~mv2.jpg/v1/fit/w_1164,h_789,q_90/a63a11_2d89fae362414287a9ff739ba21d59d8~mv2.webp"
                profile="https://upload.wikimedia.org/wikipedia/commons/9/97/Ryukin_goldfish_plate.jpg"
            />

        </div>
    )
}

export default Feed