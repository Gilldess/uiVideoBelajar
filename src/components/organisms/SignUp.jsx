import { RiEyeOffLine } from "@remixicon/react";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import Froam from "../molecules/Froam";
import Img from "../atoms/Img";
import google from "../../assets/img/google.png";
import bendera from "../../assets/img/bendera.png";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
function SignUp() {
  return (
    <div className="p-5 md:p-9 bg-[#ffffff] border border-[#f1f1f1] w-full md:w-174.5 rounded-sm">
      <div className="text-center">
        <Heading level={3} size="medium" color="secondary">
          Pendaftaran Akun
        </Heading>
        <Text size="reguler1" styleText="mt-[10px]" color="primary">
          Yuk, daftarkan akunmu sekarang juga!
        </Text>
      </div>
      <div className="mt-9">
        <div className="flex flex-col gap-6">
          <div className="flex text-end flex-col gap-4">
            <Froam htmlFor="name" text="Nama" type="text" />
            <Froam htmlFor="email" text="E-Mail" type="email" />
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
            <Froam htmlFor="password" text="Kata Sandi" type="password">
              <RiEyeOffLine className="absolute top-3 w-6 h-6 right-2.5 text-[#6C717A]" />
            </Froam>
            <Froam htmlFor="checkpwd" text="Konfirmasi Kata Sandi" type="checkpwd">
              <RiEyeOffLine className="absolute top-3 w-6 h-6 right-2.5 text-[#6C717A]" />
            </Froam>
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
          <div className="flex items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-2 text-sm md:text-[16px] text-gray-500">
              atau
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <Button
            size="primary"
            varianstyle=""
            style="w-full border border-[#f1f1f1] flex items-center justify-center gap-2 text-[#4A505C]"
          >
            <Img url={google} alt="logo" />
            <span>Masuk dengan Google</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
