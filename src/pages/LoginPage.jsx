import TempleatForam from "../components/organisms/TempleatForam";
import Navbar from "../components/organisms/Navbar";
import LoginLayout from "../components/templates/LoginLayout";
import InputLabel from "../components/molecules/InputLabel";
import { RiEyeOffLine } from "@remixicon/react";
import Button from "../components/atoms/Button";

function LoginPage() {
  return <LoginLayout navbar={<Navbar />} froamlogin={
  <TempleatForam>
    <TempleatForam.Header heading="Masuk ke Akun" text="Yuk, lanjutin belajarmu di videobelajar." />
    <TempleatForam.Body>
      <div className="flex text-end flex-col gap-4">
              <InputLabel htmlFor="email" text="E-Mail" type="email" />
              <InputLabel htmlFor="password" text="Kata Sandi" type="password">
                <RiEyeOffLine className="absolute top-3 w-6 h-6 right-2.5 text-[#6C717A]" />
              </InputLabel>
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
    </TempleatForam.Body>
  </TempleatForam>} />;
}

export default LoginPage;
