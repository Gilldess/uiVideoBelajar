const Text = ({ children, color = "primary", size = "medium1", styleText}) => {
    const varianColor = {
        primary: "text-[#333333AD]",
        secondary: "text-[#F4F5FA]",
        tertiary: "text-[#222325]",
    }
    const variantSize = {
        medium1: "md:text-base min-[330px]:text-sm text-xs font-medium", //16px
        medium2: "text-sm font-medium", //14px
        reguler1: "md:text-base text-sm font-normal",
        reguler2: "md:text-sm text-xs font-normal",
    }
    return (
        <p className={`${varianColor[color]} text-display ${styleText} ${variantSize[size]} `}>
            {children}
        </p>
    )
}
export default Text;