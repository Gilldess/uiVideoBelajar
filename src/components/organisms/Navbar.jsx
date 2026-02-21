import Logo from "../../assets/img/Logo.png"
import Button from "../atoms/Button"
import Img from "../atoms/Img"
import Text from "../atoms/Text"
const Navbar = ({children = "", text = "", setMenu}) => {
    return (
        <nav className="flex lg:gap-6 xl:gap-9 items-center">
            <div className="w-full flex items-center justify-between">
                <Img url={Logo} alt="logo"/>
                <Button onClick={setMenu} >
                    <Text size="medium1" styleText="hidden lg:block cursor-pointer" color="primary">{text}</Text>
                </Button>
            </div>
            {children}
        </nav>
    )
}
export default Navbar