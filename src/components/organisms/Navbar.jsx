import Logo from "../../assets/img/Logo.png"
import Img from "../atoms/Img"
import Text from "../atoms/Text"
const Navbar = ({children = "", text = ""}) => {
    return (
        <nav className="flex lg:gap-6 xl:gap-9 items-center">
            <div className="w-full flex items-center justify-between">
                <Img url={Logo} alt="logo"/>
                <Text size="medium1" styleText="hidden lg:block" color="primary">{text}</Text>
            </div>
            {children}
        </nav>
    )
}
export default Navbar