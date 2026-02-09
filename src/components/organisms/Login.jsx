import { RiEyeOffLine } from "@remixicon/react";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import Froam from "../molecules/Froam";
import Img from "../atoms/Img";
import google from "../../assets/img/google.png";
function Login() {
  return (
    <div className="p-5 md:p-9 bg-[#ffffff] border border-[#f1f1f1] w-full md:w-174.5 rounded-sm">
      <div className="text-center">
        <Heading level={3} size="medium" color="secondary">
          Masuk ke Akun
        </Heading>
        <Text size="reguler1" styleText="mt-[10px]" color="primary">
          Yuk, lanjutin belajarmu di videobelajar.
        </Text>
      </div>
      <div className="mt-9">
        <div className="flex flex-col gap-6">
          <form action="" className="flex flex-col gap-6">
            <div className="flex text-end flex-col gap-4">
              <Froam htmlFor="email" text="E-Mail" type="email" />
              <Froam htmlFor="password" text="Kata Sandi" type="password">
                <RiEyeOffLine className="absolute top-3 w-6 h-6 right-2.5 text-[#6C717A]" />
              </Froam>
              <p className="font-display font-medium text-sm md:text-[16px] text-[#4A505C]">
                Lupa Password?
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Button
                onClick={() => {}}
                size="primary"
                varianstyle="primary"
                style="w-full"
              >
                Masuk
              </Button>
              <Button
                onClick={() => {}}
                size="primary"
                varianstyle="tertiary"
                style="w-full"
              >
                Daftar
              </Button>
            </div>
          </form>
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

export default Login;
