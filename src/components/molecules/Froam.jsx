import Input from "../atoms/Input"
import Label from "../atoms/Label"

const Froam = ({htmlFor, text, type, children=""}) => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex gap-1">
                <Label htmlFor={htmlFor} text={text} />
                <p className="text-[#D32E1F] font-normal text-[16px]">*</p>
            </div>
            <Input type={type} label={htmlFor}>
                {children}
            </Input>
        </div>
    )
}

export default Froam