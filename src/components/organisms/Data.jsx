import Button from "../atoms/Button";
import Text from "../atoms/Text";
import { RiDeleteBin7Line, RiEdit2Line } from "@remixicon/react";
import TempleatForam from "./TempleatForam"
import InputLabel from "../molecules/InputLabel";
import { UserManager } from "../../hooks/UserManager";
import { UseVideoManager } from "../../hooks/UseVideoManager";
import Heading from "../atoms/Heading";
import Img from "../atoms/Img";
import useApiUsers from "../../stores/useApiUsers";
import { useShallow } from "zustand/shallow";
import { useEffect } from "react";

const Data = () => {
    const {dataUsers, isError, isLoading, getAllUsers} = useApiUsers(useShallow((state)=> ({
        dataUsers: state.dataUsers,
        isError: state.isError,
        isLoading: state.isLoading,
        getAllUsers: state.getAllUsers
    })))
    const { edit, editValue, setEditValue, cancel, setCancel, menu, setMenu, HandleCreate, handleDelete, handleEdit, HandleCancel, HandleUpdate} = UserManager()
    const {dataVideo, foramData, open, setOpen, isEdit, setIsEdit, handleChange, handleSubmit, handleRubah, deletVideo} = UseVideoManager()

    const handleChangeValue = (e) => {
        const {name, value} = e.target;
        setEditValue({...editValue, [name]: value})
    }

useEffect(()=> {
    const fetch = async () => {
        await getAllUsers()
    }
    fetch()
},[])
    const fetdata = async () => {
        await getAllUsers()
    }

    return (
        <div>
                {
                    isLoading && <Text styleText="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-black/50 w-full h-full flex justify-center items-center" color="secondary" size="medium1">Loading...</Text>
                }
            <div className="flex gap-4 md:gap-8 px-4 py-2 border w-fit rounded-md border-[#3A35411F]">
                <Button style={`border-b-2 rounded-none ${menu === "pengguna" ? "border-[#3ecf4c] text-[#333333AD]" : "border-transparent"}`} onClick={()=> setMenu("pengguna")}>Pengguna</Button>
                <Button style={`border-b-2 rounded-none ${menu === "koleksi" ? "border-[#3ecf4c] text-[#333333AD]" : "border-transparent"}`} onClick={()=> setMenu("koleksi")}>Koleksi</Button>
                <button onClick={fetdata}>Fetch</button>
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
                                    placeholder="Masukan Nama"
                                    value={editValue.name}
                                    onChange={handleChangeValue}
                                />
                                <InputLabel 
                                    htmlFor="email" 
                                    text="Email"
                                    type="email"
                                    placeholder="Masukan Email"
                                    value={editValue.email}
                                    onChange={handleChangeValue}
                                />
                                <InputLabel 
                                    htmlFor="nomer" 
                                    text="Hp"
                                    type="number"
                                    placeholder="Masukan No Hp"
                                    value={editValue.nomer}
                                    onChange={handleChangeValue}
                                />
                                <div className="flex flex-col gap-2 mt-4">
                                    <Button type="submit" size="primary" varianstyle="primary" style="w-full">
                                        {edit ? "Update Pengguna" : "Create Pengguna"}
                                    </Button>
                                    <Button type="button" onClick={HandleCancel} size="primary" varianstyle="tertiary" style="w-full">
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
                               dataUsers.length > 0 ? dataUsers.map((user)=> (
                                    <div key={user.id} className="flex justify-between items-center pb-2 border-b-2 border-[#3A35411F]">
                                        <div className="flex flex-col md:flex-row gap-1 md:gap-8 md:items-center" >
                                            <Text size="medium1" color="tertiary" styleText="break-all w-40 line-clamp-2">{user.name}</Text>
                                            <div>
                                                <Text size="medium1" color="tertiary" styleText="break-all w-43 md:w-80 line-clamp-2">{user.email}</Text>
                                                <Text size="medium1" color="tertiary">{user.nomer}</Text>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 md:gap-4 items-center md:mr-5">
                                            <RiEdit2Line onClick={()=> handleEdit(user)} className="cursor-pointer bg-[#3ecf4c] w-7 h-7 md:w-9 md:h-9 p-2 rounded-full" />
                                            <RiDeleteBin7Line onClick={()=> handleDelete(user.id)} className="cursor-pointer bg-red-600 w-7 h-7 md:w-9 md:h-9 p-2 rounded-full" />
                                        </div>
                                    </div>
                                ))
                                 :
                                <div className="text-center">
                                    <Text size="medium1" color="primary" styleText="mb-2">`(*&gt;﹏&lt;*)′</Text>
                                    <Text size="medium1" color="tertiary">Belum Ada Data</Text>
                                </div>
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
                                                    <Text size="reguler2" color="primary" styleText="hidden md:inline-block">{video.job}<span> di <b>Gojek</b></span></Text>
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

            {
                isError && <Text size="medium1" styleText="text-red-600 text-center mt-2">{isError} !!!</Text>
            }
        </div>
    )
}

export default Data;