const Heading = ({ level = 1,size, children, color }) => {
  const Tag = `h${level}`; 

  const variantColor = {
    primary: "text-[#FFFFFF]",
    secondary: "text-[#222325]",
  }
  const variantSize = {
    big: "text-5xl font-bold",
    medium: "text-[32px] font-semibold",
    smallbold: "text-2xl font-bold",
    smallsemibold: "text-2xl font-semibold",
  };

  return (
    <Tag className={`${variantSize[size]} ${variantColor[color]}`}>
      {children}
    </Tag>
  );
};

export default Heading;