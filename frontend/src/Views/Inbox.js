function Inbox() {
    const links = [["", "Home"], ["Contact", "Contact"], ["Notifications", "Notifications"],
    ["Messages", "Messages"], ["Bookmarks", "Bookmarks"], ["Inbox", "Inbox"], ["Profile", "Profile"],
    ["Profile", "Profile"], ["More", "More"]]
    return (
        <div>
            <h2>Inbox</h2>
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
                <div id="email">
                    <h4>Received mail</h4>
                    <h5>Here's your inbox, which shows all the mail you have recieved!</h5>
                    <div className="inbox-Area">You have no new messages!</div>
                    <h4>Send a message</h4>
                    <p>Recipient:</p>
                    <input type="text" class="smallBox" placeholder="Enter recipient's username or email"/>
                    <p>Subject:</p>
                    <input type="text" class="smallBox" placeholder="Enter subject of mail"/>
                    <p>Description:</p>
                    <textarea id="contentArea" rows="10" cols="70" placeholder="Enter content of email here"></textarea>
                    <br></br>
                    <button id="sendMail">Send Mail</button>
                </div>
                <div className="Home-news">News and Popular</div>       
            </div>
        </div>
    )
}

export default Inbox;