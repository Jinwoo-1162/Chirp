import './Textbox.css';
function Textbox(props) {
    return (
        <div className="textbox">
            {props.textcontent}
        </div>
    );
}

export default Textbox;