import React from "react";
import '../CSS/TweetBox.css';
import Profile from "../Images/profile.png";

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <img src={Profile} id="profile"/>
                    <input placeholder="What's happening?" type="text"/>
                </div>
                <button>Tweet</button>
            </form>
        </div>
    )
}

export default TweetBox