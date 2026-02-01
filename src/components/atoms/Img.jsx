const Img = ({ url,ket, styleImg }) => {
    return (
        <img src={url} alt={ket} className={`object-cover ${styleImg}`} />
    )
}

export default Img;