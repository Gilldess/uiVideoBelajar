import Img from "../atoms/Img";
import Logo from "../../assets/img/Logo.png";
import { 
  RiLinkedinLine, 
  RiFacebookLine, 
  RiInstagramLine, 
  RiTwitterXLine 
} from '@remixicon/react';

const Footer = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
        <div>
          <div className="mb-4">
            <Img url={Logo} alt="logo" />
          </div>
          <div className="flex flex-col gap-3 md:w-92.5">
            <p className="font-display font-bold text-lg text-[#3A3541DE]">
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </p>
            <p className="font-normal text-[#222325] text-[16px]">
              Jl. Usman Effendi No. 50 Lowokwaru, Malang
            </p>
            <p className="font-normal text-[#222325] text-[16px]">
              +62-877-7123-1234
            </p>
          </div>
        </div>
        <div className="hidden lg:flex gap-8 xl:gap-12">
          <div>
            <p className="font-display font-bold text-[16px] text-[#222325]">
              Kategori
            </p>
            <div className="flex flex-col gap-3.25 mt-3.75 font-display font-medium text-[16px] text-[#3A3541AD]">
              <p>Digital & Teknologi</p>
              <p>Pemasaran</p>
              <p>Manajemen Bisnis</p>
              <p>Pengembangan Diri</p>
              <p>Desain</p>
            </div>
          </div>
          <div>
            <p className="font-display font-bold text-[16px] text-[#222325]">
              Perusahaan
            </p>
            <div className="flex flex-col gap-3.25 mt-3.75 font-display font-medium text-[16px] text-[#3A3541AD]">
              <p>Tentang Kami</p>
              <p>FAQ</p>
              <p>Kebijakan Privasi</p>
              <p>Ketentuan Layanan</p>
              <p>Bantuan</p>
            </div>
          </div>
          <div>
            <p className="font-display font-bold text-[16px] text-[#222325]">
              Komunitas
            </p>
            <div className="flex flex-col gap-3.25 mt-3.75 font-display font-medium text-[16px] text-[#3A3541AD]">
              <p>Tips Sukses</p>
              <p>Blog</p>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden flex-col gap-3">
          <div className="flex justify-between">
            <p className="font-bold text-[16px] text-[#222325]">Kategori</p>
            <span className="text-[#3A35418A] font-semibold text-xl">&gt;</span>
          </div>
          <div className="flex justify-between">
            <p className="font-bold text-[16px] text-[#222325]">Perusahaan</p>
            <span className="text-[#3A35418A] font-semibold text-xl">&gt;</span>
          </div>
          <div className="flex justify-between">
            <p className="font-bold text-[16px] text-[#222325]">Komunitas</p>
            <span className="text-[#3A35418A] font-semibold text-xl">&gt;</span>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-[#3A35411F] xl:pt-8"></div>
      <div className="flex gap-3 flex-col-reverse md:flex-row md:justify-between md:items-center">
        <p className="font-display font-medium text-[16px] text-[#333333AD]">@2023 Gerobak Sayur All Rights Reserved.</p>
        <div className="flex gap-3.75">
          <div className="border-2 border-[#3A3541DE] rounded-full p-1">
            <RiLinkedinLine className="text-[#222325] w-5 h-5 cursor-pointer" />
          </div>
          <div className="border-2 border-[#3A3541DE] rounded-full p-1">
            <RiFacebookLine className="text-[#222325] w-5 h-5 cursor-pointer" />
          </div>
          <div className="border-2 border-[#3A3541DE] rounded-full p-1">
            <RiInstagramLine className="text-[#222325] w-5 h-5 cursor-pointer" />
          </div>
          <div className="border-2 border-[#3A3541DE] rounded-full p-1">
            <RiTwitterXLine className="text-[#222325] w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
