import Navbar from "../components/organisms/Navbar"
import Dasboard from "../components/templates/Dashboard"
import Profile from "../assets/img/profile.png"
import Img from "../components/atoms/Img"
import Text from "../components/atoms/Text"
import Data from "../components/organisms/Data"

const DashboardPage = () => {
    return (
        <Dasboard
            header={<Navbar>
                <div className="flex gap-2 md:gap-3">
                    <div className="w-9 h-9 md:w-11 md:h-11 rounded-[10px] overflow-hidden">
                        <Img url={Profile} styleImg="w-full h-full" alt="profile"/>
                    </div>
                    <div className="hidden md:inline-block md:w-40">
                        <Text color="tertiary" size="reguler1">Fulan</Text>
                        <Text color="primary" size="reguler2">Admin videobelajar</Text>
                    </div>
                </div>
            </Navbar>}
            main={<Data></Data>}
        />
    )
}

export default DashboardPage