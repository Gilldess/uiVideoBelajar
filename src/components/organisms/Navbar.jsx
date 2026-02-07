import Img from "../atoms/Img"
import Logo from "../../assets/img/logo.png"
import Profile from "../../assets/img/profile.png"
import Text from "../atoms/Text"
import { RiMenuLine } from "@remixicon/react"
const Navbar = () => {
    return (
        <nav className="flex lg:gap-6 xl:gap-9 items-center">
            <div className="w-full flex items-center justify-between">
                <Img url={Logo} alt="logo"/>
                <Text size="medium1" styleText="hidden lg:block" color="primary">Kategori</Text>
            </div>
            <RiMenuLine className="text-3xl lg:hidden"/> 
            <div className="w-11 h-11 rounded-[10px] hidden lg:block overflow-hidden">
             <Img url={Profile} styleImg="w-full h-full" alt="profile"/>
            </div>
        </nav>
    )
}
export default Navbar