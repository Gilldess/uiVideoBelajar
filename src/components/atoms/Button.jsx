const Button = ({children, onClick, varianstyle, size, style})=> {
    const variantStyles = {
        primary: " bg-[#3ecf4c] text-white border-none",
        secondary: "bg-[#ffbd3a] text-white border-none",
        tertiary: "bg-[#E2FCD9CC] text-[#3ecf4c] border-none",
    };
    const variantSize = {
        primary: "md:text-base min-[330px]:text-sm text-xs py-2.5 px-[7.5px] md:px-[26px]",
        secondary: "text-sm py-[7px] px-[22px]",
    }
    return (
        <button onClick={onClick} className={`rounded-[10px] ${variantSize[size]} font-bold font-display ${variantStyles[varianstyle]} ${style}`}>
            {children}
        </button>
    )
}

export default Button;