function Contact() {
    const links = [["", "Home"], ["Contact", "Contact"], ["Notifications", "Notifications"],
    ["Messages", "Messages"], ["Bookmarks", "Bookmarks"], ["Inbox", "Inbox"], ["Profile", "Profile"],
    ["Profile", "Profile"], ["More", "More"]]
    return (
        <div>
            <h2>Contact</h2>
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
                <div id="questionArea">
                    <h4>Want to contact us? Fill out the form!</h4>
                    <p>Your Name:</p>
                    <input type="text" id="nameBox" placeholder="Example: John Doe" />
                    <p>Your Email:</p>
                    <input type="text" class="smallBox" placeholder="Example: johndoe@gmail.com" />
                    <p>Subject:</p>
                    <input type="text" class="smallBox" placeholder="Example: Technical difficulties" />
                    <p>Description:</p>
                    <textarea id="contentArea" rows="10" cols="70" placeholder="Please enter any questions, comments, or concerns."></textarea>
                    <br></br>
                    <button id="submitButton">Submit</button>
                </div>
                <div className="Home-news">News and Popular</div>
            </div>
        </div>
    )
}

export default Contact;
