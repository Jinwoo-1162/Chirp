import React from "react";
import TweetBox from "../Views/TweetBox";
import '../CSS/Feed.css';
import Post from "../Views/Post.js";


function Feed() {
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed_header">
                <h2>Home</h2> 
            </div>

            {/* TweetBox */}
            <TweetBox/>
            {/* Post */}
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Feed