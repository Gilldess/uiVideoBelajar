export const Button = ({label, onClick, variant, size})=> {
    const variantStyles = {
        primary: " bg-[#3ecf4c] text-white border-none",
        secondary: "bg-[#ffbd3a] text-white border-none",
        tertiary: "bg-[#E2FCD9CC] text-[#3ecf4c] border-none",
    };
    const variantSize = {
        primary: "text-base py-[10px] px-[26px]",
        secondary: "text-sm py-[7px] px-[22px]",
    }
    return (
        <button onClick={onClick} className={`rounded-[10px] ${variantSize[size]} font-bold font-display ${variantStyles[variant]}`}>
            {label}
        </button>
    )
}