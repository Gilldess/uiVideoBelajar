import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import Img from "../atoms/Img";
import google from "../../assets/img/google.png";

function TempleatForam ({children}) {
  return (
    <div className="p-5 relative md:p-9 bg-[#ffffff] border border-[#f1f1f1] w-full md:w-174.5 rounded-sm">
      {children}
    </div>
  );
}

TempleatForam.Header = ({heading, text}) => {
  return (
      <div className="text-center">
        <Heading level={3} size="medium" color="secondary">
          {heading}
        </Heading>
        <Text size="reguler1" styleText="mt-[10px]" color="primary">
          {text}
        </Text>
      </div>
  )
}
TempleatForam.Body = ({children}) => {
  return (
      <div className="mt-9">
        <div className="flex flex-col gap-6">
          <form action="" className="flex flex-col gap-6">
            {children}
          </form>
          <div className="flex items-center">
            <div className="grow border-t border-gray-400"></div>
            <span className="shrink mx-2 text-sm md:text-[16px] text-gray-500">
              atau
            </span>
            <div className="grow border-t border-gray-400"></div>
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
  )
}

export default TempleatForam;
