import Input from "../atoms/Input"
import Label from "../atoms/Label"

const InputLabel = ({htmlFor, text, type, children="", onChange, value, placeholder="", accept}) => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex gap-1">
                <Label htmlFor={htmlFor} text={text} />
                <p className="text-[#D32E1F] font-normal text-[16px]">*</p>
            </div>
            <Input type={type} label={htmlFor} placeholder={placeholder} onChange={onChange} accept={accept} name={htmlFor} value={value}>
                {children}
            </Input>
        </div>
    )
}

export default InputLabel;