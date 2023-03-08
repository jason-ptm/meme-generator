import './Image.css'

function Image(props){
    return (
        <div className="Image" width={`${props.meme.image.width}px`} height={`${props.meme.image.height}px`}>
            <span className="top">{props.meme.top}</span>
            <span className="bottom">{props.meme.bottom}</span>
            <img src={props.meme.image.url} alt="meme" />
        </div>
    )
}

export default Image