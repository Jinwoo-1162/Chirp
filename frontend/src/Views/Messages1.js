import '../CSS/Messages.css';
function Messages1(props) {
    return (
        <div>
            <h2>Messages</h2>
            <div className="grid-layout">
                <div className="people">People</div>
                <div className="text">Text Messages</div>
            </div>
            <div className="to-home"><a href="/">To Home</a></div>
        </div>
    );
}

export default Messages1;