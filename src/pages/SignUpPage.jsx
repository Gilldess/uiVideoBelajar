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
import { UserManager } from "../hooks/UserManager";

const SignUpPage = ()=> {
    const {setEditValue, editValue,  HandleCreate} =UserManager([]);
    const handleChangeValue = (e) => {
        const {name, value} = e.target;
        setEditValue({...editValue, [name]: value})
    }

    return (
        <SignUpLayout navbar={<Navbar />} froamsignup={
        <TempleatForam>
            <TempleatForam.Header heading="Pendaftaran Akun" text="Yuk, daftarkan akunmu sekarang juga!" />
            <TempleatForam.Body>
                <form onSubmit={HandleCreate}>
                    <div className="flex text-end flex-col gap-4">
                        <InputLabel htmlFor="name" text="Nama" type="text" value={editValue.name} onChange={handleChangeValue} />
                        <InputLabel htmlFor="email" text="E-Mail" type="email" value={editValue.email} onChange={handleChangeValue} />
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
                                <Input name="nomer" type="number" label="hp" value={editValue.nomer} onChange={handleChangeValue}/>
                            </div>
                        </div>
                        <InputLabel htmlFor="password" text="Kata Sandi" type="password">
                            <RiEyeOffLine className="absolute top-3 w-6 h-6 right-2.5 text-[#6C717A]" />
                        </InputLabel>
                        <InputLabel htmlFor="checkpwd" text="Konfirmasi Kata Sandi" type="password">
                            <RiEyeOffLine className="absolute top-3 w-6 h-6 right-2.5 text-[#6C717A]" />
                        </InputLabel>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Button
                        type="submit"
                        size="primary"
                        varianstyle="tertiary"
                        style="w-full"
                        >
                        Daftar
                        </Button>
                        <Button
                        type="button"
                        onClick={() => {}}
                        size="primary"
                        varianstyle="primary"
                        style="w-full"
                        >
                        Masuk
                        </Button>
                    </div>
                </form>
            </TempleatForam.Body>
        </TempleatForam>
        } />
    )
}

export default SignUpPage;