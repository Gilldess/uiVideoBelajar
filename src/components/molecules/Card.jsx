import Heading from "../atoms/Heading";
import Img from "../atoms/Img"
import Text from "../atoms/Text";
const Card = ({ imgclass,alt, heading, sub, imgpp, ket, name, job, imgrate,rate, price }) => {
    return (
        <div className="xl:p-5 min-[330px]:p-4 p-3 bg-[#FFFFFF] w-full md:w-89 lg:w-79 xl:w-[384px] rounded-[10px] flex flex-col gap-2 md:gap-4">
            <div className="w-full flex md:flex-col items-center gap-3 md:gap-4">
                <div className="rounded-[10px] w-20.5 h-20.5 md:w-full md:h-50 overflow-hidden">
                    <Img url={imgclass} alt={alt} styleImg="w-full h-full" />
                </div>
                <div className="flex flex-col gap-2 md:gap-4">
                    <div className="flex flex-col gap-2 md:gap-3">
                        <Heading level={6} size="xssemibold" style="w-40 min-[330px]:w-50 md:w-full" color="secondary">{heading}</Heading>
                        <Text size="medium1" styleText="hidden md:line-clamp-2" color="primary">{sub}</Text>
                    </div>
                    <div className="flex gap-2.5 items-center">
                        <div className="md:w-10 md:h-10 w-9 h-9 overflow-hidden rounded-[10px]">
                            <Img url={imgpp} alt={ket} styleImg="w-full h-full" />
                        </div>
                        <div>
                            <Text size="medium1" color="tertiary">{name}</Text>
                            <Text size="reguler2" color="primary">{job}<span className="hidden md:inline-block">di <b>Gojek</b></span></Text>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <Img url={imgrate} alt={ket} />
                    <Text size="medium2" color="primary">{rate}</Text>
                </div>
                <Heading level={4} size="smallsemibold" color="tertiary">{price}</Heading>
            </div>
        </div>
    )
}

export default Card;