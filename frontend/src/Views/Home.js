<<<<<<< HEAD
function Home(props) {
    return (
        <div>
            <h2>Home</h2>
            <p>This is the home page.</p>
            <a href="/Contact">Contact Us</a>
        </div>
    );
=======
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
>>>>>>> 34827b4a381c0a61b98dd9aa4e4f3fc76bfed705
}

export default Home;