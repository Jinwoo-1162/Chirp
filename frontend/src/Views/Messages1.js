import '../CSS/Messages.css';
function Messages1(props) {
    return (
        <div>
            <h2>Messages</h2>
            <div className="grid-layout">
                <div className="people">People</div>
                <div className="message-section">
                    <div className="text">Text Messages</div>
                    <input type="text" className="message-input" id="messageInput" placeholder="Input Message Here"/>
                </div>
            </div>
            <div className="to-home"><a href="/">To Home</a></div>
        </div>
    );
}

export default Messages1;