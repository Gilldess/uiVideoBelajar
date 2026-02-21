import InputLabel from "../components/molecules/InputLabel";
import Navbar from "../components/organisms/Navbar";
import TempleatForam from "../components/organisms/TempleatForam";
import SignUpLayout from "../components/templates/SignUpLayout";
import bendera from "../assets/img/bendera.png";
import Label from "../components/atoms/Label";
import Img from "../components/atoms/Img";
import Input from "../components/atoms/Input";
import { RiEyeOffLine } from "@remixicon/react";
import Button from "../components/atoms/Button";

const SignUpPage = ()=> {
    return (
        <SignUpLayout navbar={<Navbar />} froamsignup={
        <TempleatForam>
            <TempleatForam.Header heading="Pendaftaran Akun" text="Yuk, daftarkan akunmu sekarang juga!" />
            <TempleatForam.Body>
                <div className="flex text-end flex-col gap-4">
                    <InputLabel htmlFor="name" text="Nama" type="text" />
                    <InputLabel htmlFor="email" text="E-Mail" type="email" />
                    <div className="flex gap-4 w-full items-end">
                        <div>
                            <div className="flex gap-1">
                                <Label htmlFor="hp" text="No. Hp" />
                                <p className="text-[#D32E1F] font-normal text-[16px]">*</p>
                            </div>
                            <div className="flex items-center border border-[#3A35411F] rounded-md w-fit pr-3">
                                <Img url={bendera} alt="logo" />
                                <select className="pr-4 py-3">
                                    <option>+ 62</option>
                                    <option>+ 60</option>
                                    <option>+ 65</option>
                                    <option>+ 66</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex-1">
                            <Input type="number" label="hp"/>
                        </div>
                    </div>
                    <InputLabel htmlFor="password" text="Kata Sandi" type="password">
                        <RiEyeOffLine className="absolute top-3 w-6 h-6 right-2.5 text-[#6C717A]" />
                    </InputLabel>
                    <InputLabel htmlFor="checkpwd" text="Konfirmasi Kata Sandi" type="checkpwd">
                        <RiEyeOffLine className="absolute top-3 w-6 h-6 right-2.5 text-[#6C717A]" />
                    </InputLabel>
                </div>
                <div className="flex flex-col gap-4">
                    <Button
                    onClick={() => {}}
                    size="primary"
                    varianstyle="tertiary"
                    style="w-full"
                    >
                    Daftar
                    </Button>
                    <Button
                    onClick={() => {}}
                    size="primary"
                    varianstyle="primary"
                    style="w-full"
                    >
                    Masuk
                    </Button>
                </div>
            </TempleatForam.Body>
        </TempleatForam>
        } />
    )
}

export default SignUpPage;