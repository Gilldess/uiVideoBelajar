const Label = ({htmlFor, text}) => {
    return (
        <label className="text-sm md:text-[16px] font-display text-[#4A505C] font-normal" htmlFor={htmlFor}>{text}</label>
    )
}

export default Label