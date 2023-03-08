import './Form.css'

function Form(props) {
    return (
        <div className="Form">
            <div className="inputs">
                <input type="text" placeholder='Top section text'
                    onChange={props.handlers.handlerChange}
                    name="top" />
                <input type="text" placeholder='Bottom section text'
                    onChange={props.handlers.handlerChange}
                    name="bottom" />
            </div>
            <div className="btn" onClick={props.handlers.handlerClick}>
                Get a new meme image
                <i className="fa-solid fa-image"></i>
            </div>
        </div>
    )
}

export default Form