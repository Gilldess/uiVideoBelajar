const Button = ({children, onClick, varianstyle, style, ...props})=> {
    const variantStyles = {
        primary: " bg-[#3ecf4c] text-white border-none",
        secondary: "bg-[#ffbd3a] text-white border-none",
        tertiary: "bg-[#E2FCD9CC] text-[#3ecf4c] border-none",
    }

    return (
        <button onClick={onClick} className={`text-xs min-[330px]:text-sm py-2.5 px-[7.5px] md:text-base md:px-6.5 font-bold font-display rounded-[10px] ${variantStyles[varianstyle]} ${style}`} {...props}>
            {children}
        </button>
    )
}

export default Button;