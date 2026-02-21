import Navbar from "../components/organisms/Navbar"
import Hero from "../components/organisms/Hero"
import HomeLayout from "../components/templates/HomeLayout"
import Collection from "../components/organisms/Collection"
import Button from "../components/atoms/Button"
import Footer from "../components/organisms/Footer"
import { RiLogoutBoxRLine, RiMenuLine } from "@remixicon/react"
import Profile from "../assets/img/profile.png"
import Img from "../components/atoms/Img"
import { useState } from "react"
import { Link } from "react-router"


export const HomePage = () => {
    const [menu, setMenu] = useState(false)
    
    const handelMenu = () => {
        setMenu(!menu)
    }
    return (
        <HomeLayout 
        navbar={<Navbar 
            setMenu={()=> handelMenu()}
            text="Kategori">
            <Button onClick={()=> handelMenu()}>
                <RiMenuLine className="text-3xl lg:hidden"/> 
            </Button>
            <div className="w-11 h-11 rounded-[10px] hidden lg:block overflow-hidden">
             <Img url={Profile} styleImg="w-full h-full" alt="profile"/>
            </div>
            <div className={`absolute top-11 z-10 right-0 lg:right-28 xl:20 transition-all duration-500 w-full lg:w-50 pt-1 shadow-lg bg-[#FFFFFF] rounded-b-sm ${menu ? "translate-y-5" : "-translate-y-100" }`}>
                <div className="flex flex-col">
                    <Link to="/" onClick={()=> handelMenu()} className="py-4 px-3 text-start font-normal text-[#333333AD] border-b border-[#3A35411F]">Profil Saya</Link>
                    <Link to="/" onClick={()=> handelMenu()} className="py-4 px-3 text-start font-normal text-[#333333AD] border-b border-[#3A35411F]">Kelas Saya</Link>
                    <Link to="/" onClick={()=> handelMenu()} className="py-4 px-3 text-start font-normal text-[#333333AD] border-b border-[#3A35411F]">Pesanan Saya</Link>
                    <Link to="/" onClick={()=> handelMenu()} className="py-4 px-3 text-start font-normal text-[#FF5C2B] border-b flex gap-1.25">Keluar <RiLogoutBoxRLine /></Link>
                </div>
            </div>
        </Navbar>}
        hero={<Hero 
        level={1} 
        bgimg="bg-hero"
        contstyle="hero"
        sizeheading="big"
        sizetext="medium1"
        conttext="contTextHero"
        styleText="xl:line-clamp-2"
        title="Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!"
        ket="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda."
        textbtn="Temukan Video Course untuk Dipelajari!"
        fcnbtn={()=> {
        }}
        >
         <Button onClick={()=> {}} varianstyle="primary" style="w-fit" size="primary">Temukan Video Course untuk Dipelajari!</Button>   
        </Hero>}
        collection={<Collection />}

        call={<Hero 
        level={2}
        bgimg="bg-call"
        contstyle="call"
        sizeheading="medium"
        sizetext="reguler1"
        texttop="NEWSLETTER"
        conttext="contTextHero"
        title="Mau Belajar Lebih Banyak?"
        ket="Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id"
        textbtn="Subscribe"
        fcnbtn={()=> {
        }}
        >
            <input type="email" required placeholder="Masukan Emailmu" className="bg-white w-full py-2.5 md:py-4.5 placeholder:text-center md:placeholder:text-start md:pl-8 rounded-[10px]" />
          <Button onClick={()=> {}} varianstyle="secondary" style="md:absolute w-full md:w-auto md:top-1/2 md:-translate-y-1/2 md:right-2" size="primary">
            Subcribe
          </Button>
        </Hero>}
        footer={<Footer />}
        />
    )
}