import Button from "../atoms/Button";
import Text from "../atoms/Text";
import { RiDeleteBin7Line, RiEdit2Line } from "@remixicon/react";
import TempleatForam from "./TempleatForam"
import InputLabel from "../molecules/InputLabel";
import { UserManager } from "../../hooks/UserManager";
import { UseVideoManager } from "../../hooks/UseVideoManager";
import Heading from "../atoms/Heading";
import Img from "../atoms/Img";

const Data = () => {
    const users = [
        {
            id: 1,
            name: "Budi",
        },
        {
            id: 2,
            name: "Edi",
        }
    ]
    const {data, edit, editValue, setEditValue, cancel, setCancel, menu, setMenu, HandleCreate, handleDelete, handleEdit, HandleCancel, HandleUpdate} = UserManager(users)
    const {dataVideo, foramData, open, setOpen, isEdit, setIsEdit, handleChange, handleSubmit, handleRubah, deletVideo} = UseVideoManager()

    return (
        <div>
            <div className="flex gap-4 md:gap-8 px-4 py-2 border w-fit rounded-md border-[#3A35411F]">
                <Button style={`border-b-2 rounded-none ${menu === "pengguna" ? "border-[#3ecf4c] text-[#333333AD]" : "border-transparent"}`} onClick={()=> setMenu("pengguna")}>Pengguna</Button>
                <Button style={`border-b-2 rounded-none ${menu === "koleksi" ? "border-[#3ecf4c] text-[#333333AD]" : "border-transparent"}`} onClick={()=> setMenu("koleksi")}>Koleksi</Button>
            </div>
            <div className={`inset-0 w-full h-full bg-black/70 ${cancel || open ? "fixed" : "hidden"}`}>
                <div className="flex w-full h-full justify-center items-center">
                   <TempleatForam>
                        {menu === "pengguna" ? (
                        <>
                            <TempleatForam.Header 
                                heading={edit ? "Edit Pengguna" : "Tambah Pengguna"} 
                                text={edit ? "Kamu akan mengedit data pengguna" : "Silahkan tambahkan pengguna"}
                            />
                            <form onSubmit={edit ? HandleUpdate : HandleCreate}>
                                <InputLabel 
                                    htmlFor="name" 
                                    text="Nama Pengguna"
                                    type="text"
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                                />
                                <div className="flex flex-col gap-2 mt-4">
                                    <Button type="submit" size="primary" varianstyle="primary" style="w-full">
                                        {edit ? "Update Pengguna" : "Create Pengguna"}
                                    </Button>
                                    <Button onClick={HandleCancel} size="primary" varianstyle="tertiary" style="w-full">
                                        Batal
                                    </Button>
                                </div>
                            </form>
                        </>
                    ) : (
                        <>
                            <TempleatForam.Header 
                                heading={isEdit ? "Edit Video" : "Tambah Video"} 
                                text={isEdit ? "Ubah detail video mentor" : "Isi detail video baru"}
                            />
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col gap-2">
                                    <InputLabel 
                                        name="name"
                                        htmlFor="name" 
                                        text="Nama Mentor"
                                        type="text"
                                        value={foramData.name}
                                        onChange={handleChange}
                                    />
                                    <InputLabel name="job" value={foramData.job} onChange={handleChange} htmlFor="job" text="Pekerjaan" type="text" />
                                    <InputLabel name="title" value={foramData.title} onChange={handleChange} htmlFor="title" text="Title Video" type="text" />
                                    <InputLabel name="sub" value={foramData.sub} onChange={handleChange} htmlFor="sub" text="Sub Video" type="text" />
                                </div>
                                <div className="flex flex-col gap-2 mt-4">
                                    <Button type="submit" size="primary" varianstyle="primary" style="w-full">
                                        {isEdit ? "Update Video" : "Create Video"}
                                    </Button>
                                    <Button 
                                        onClick={() => { setOpen(false); setIsEdit(false); }} 
                                        size="primary" 
                                        varianstyle="tertiary" 
                                        style="w-full"
                                    >
                                        Batal
                                    </Button>
                                </div>
                            </form>
                        </>
                    )}
                   </TempleatForam>
                </div>
            </div>
            <div>
                {
                    menu === "pengguna" ?
                    <div className="mt-6 border-2 border-[#3A35411F] rounded-md">
                        <div className="flex justify-between items-center py-1 md:py-2 px-6 md:px-12 border-b-2 border-[#3A35411F]">
                            <Text size="medium1" color="tertiary">Pengguna</Text>
                                <Button onClick={()=> setCancel(true)} size="medium1" color="tertiary" style="md:hidden text-[#3ecf4c] bg-[#E2FCD9CC] cursor-pointer">+ Add</Button>
                            <div className="hidden md:flex gap-4 items-center">
                                <Button onClick={()=> setCancel(true)} size="medium1" color="tertiary" style="text-[#3ecf4c] bg-[#E2FCD9CC] cursor-pointer">+ Add</Button>
                                <Text size="medium1" color="tertiary">Update</Text>
                                <Text size="medium1" color="tertiary">Hapus</Text>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 py-4 px-4 md:px-8">
                            {
                                data.map((user)=> (
                                    <div key={user.id} className="flex justify-between items-center">
                                        <Text size="medium1" color="tertiary">{user.name}</Text>
                                        <div className="flex gap-2 md:gap-8 items-center mr-5">
                                            <RiEdit2Line onClick={()=> handleEdit(user)} className="cursor-pointer bg-[#3ecf4c] w-7 h-7 md:w-9 md:h-9 p-2 rounded-full" />
                                            <RiDeleteBin7Line onClick={()=> handleDelete(user.id)} className="cursor-pointer bg-red-600 w-7 h-7 md:w-9 md:h-9 p-2 rounded-full" />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div> : 
                    <div className="mt-4 md:mt-6">
                        <div className="border border-[#3A35411F] p-2 md:px-8 md:py-4">
                            <div className="flex justify-between pb-2 border-b-2 border-[#3A35411F]">
                                <Heading level={3} size="medium" color="secondary">Data video</Heading>
                                <Button onClick={()=> setOpen(true)} size="medium1" color="tertiary" style="text-[#3ecf4c] bg-[#E2FCD9CC] cursor-pointer">+ Add</Button>
                            </div>
                            <div className="flex flex-col gap-2">
                                {
                                    dataVideo.map((video)=> (
                                        <div key={video.id} className="grid grid-cols-[2fr_1fr_1fr] items-center mt-6">
                                            <div className="flex gap-2 md:gap-4 items-center">
                                                <Img url={video.img} alt={video.alt} styleImg="w-10 h-10 md:w-20 md:h-20 rounded-md" />
                                                <div>
                                                    <Heading level={6} size="xssemibold" color="secondary" style="w-20 md:w-40 txt-ellipsis line-clamp-2">{video.title}</Heading>
                                                    <Text size="reguler2" color="primary" styleText="hidden w-[500px] md:inline-block">{video.sub}</Text>
                                                </div>
                                            </div>
                                            <div className="flex gap-1 items-center">
                                                <div className="md:w-10 md:h-10 hidden md:inline-block overflow-hidden rounded-[10px]">
                                                    <Img url={video.profil} alt="ket" styleImg="w-full h-full" />
                                                </div>
                                                <div className="px-4">
                                                    <Text size="medium1" color="tertiary">{video.name}</Text>
                                                    <Text size="reguler2" color="primary" styleText="hidden md:inline-block">{video.job}<span>di <b>Gojek</b></span></Text>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 md:gap-8 items-center">
                                                    <div className="hidden md:flex items-center">
                                                        <p>{video.rate}</p>
                                                        <p>{video.price}</p>
                                                    </div>
                                                    <RiEdit2Line onClick={()=> handleRubah(video)} className="cursor-pointer bg-[#3ecf4c] w-7 h-7 md:w-9 md:h-9 p-2 rounded-full" />
                                                    <RiDeleteBin7Line onClick={()=> deletVideo(video.id)} className="cursor-pointer bg-red-600 w-7 h-7 md:w-9 md:h-9 p-2 rounded-full" />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Data;