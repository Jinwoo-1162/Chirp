function Home() {
    const links = [["", "Home"], ["Contact", "Contact"], ["Notifications", "Notifications"],
    ["Messages", "Messages"], ["Bookmarks", "Bookmarks"], ["Inbox", "Inbox"], ["Profile", "Profile"],
    ["Profile", "Profile"], ["More", "More"]]
    return (
        <div>
            <h2>Home</h2>
            <div className="Home-grid-container">
                <div className="Home-navigation">
                    {
                        links?.map((link) => {
                            return (
                                <div>
                                    <a href={`/${link[0]}`}>{link[1]}</a>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <div className="Home-tweet-input">Chirp something:</div>
                    <div className="Home-tweet-feed">Your Feed</div>
                </div>
                <div className="Home-news">News and Popular</div>
            </div>
        </div>
    )
}

export default Home;