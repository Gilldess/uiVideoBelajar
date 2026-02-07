const Heading = ({ level = 1, size, children, color, style }) => {
  const Tag = `h${level}`;

  const variantColor = {
    primary: "text-[#FFFFFF]",
    secondary: "text-[#222325]",
    tertiary: "text-[#3ECF4C]",
  };
  const variantSize = {
    big: "md:text-5xl min-[330px]:text-2xl text-xl font-bold", // 48px//
    medium: "md:text-[32px] min-[330px]:text-2xl text-xl font-semibold",
    smallbold: "text-2xl font-bold", //24px//
    smallsemibold: "md:text-2xl text-[20x] font-semibold",
    xssemibold: "text-[16px] md:text-[18px] font-semibold",
  };

  return (
    <Tag className={`${variantSize[size]} ${style} ${variantColor[color]}`}>
      {children}
    </Tag>
  );
};

export default Heading;
