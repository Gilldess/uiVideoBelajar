const Img = ({ url, alt, styleImg }) => {
    return (
        <img src={url} alt={alt} className={`object-cover ${styleImg}`} />
    )
}

export default Img;