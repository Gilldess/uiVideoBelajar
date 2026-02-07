import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
const Hero = ({
  level,
  title,
  ket,
  bgimg,
  contstyle,
  conttext,
  sizeheading,
  sizetext,
  texttop = "",
  styleText = "",
  children
}) => {
  const variantStyle = {
    hero: "py-9.25 px-5 md:px-8 xl:px-30 text-center flex justify-center flex-col gap-6",
    call: "py-[92px] px-5 md:px-[100px] lg:px-[250px] xl:px-[320px] flex flex-col text-center justify-center gap-6",
    contTextHero: "xl:px-15 gap-3",
  };
  return (
    <div
      className={`relative w-full h-100 bg-cover bg-center overflow-hidden rounded-[10px] ${bgimg}`}
    >
      <div className="absolute bg-[#000000CC] w-full h-full z-1"></div>
      <div
        className={` items-center h-full w-full relative z-2 ${variantStyle[contstyle]}`}
      >
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#C1C2C4] text-[16px] md:text-[18px] font-medium ">
            {texttop}
          </p>
          <div className={`flex flex-col ${variantStyle[conttext]}`}>
            <Heading
              level={level}
              size={sizeheading}
              color="primary"
              style="z-2 relative"
            >
              {title}
            </Heading>
            <Text size={sizetext} styleText={styleText} color="secondary">
              {ket}
            </Text>
          </div>
        </div>
        <div className="w-full relative flex flex-col gap-4 items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Hero;
