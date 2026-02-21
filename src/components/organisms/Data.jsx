import { useState } from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import { RiDeleteBin7Line, RiEdit2Line } from "@remixicon/react";
import TempleatForam from "./TempleatForam"

const Data = ()=> {

    const users = [
        {
            id: 1,
            name: "Fulan",
            path: "Front-End"
        },
        {
            id: 2,
            name: "Edi",
            path: "Front-End"
        }
    ]

    const [menu, setMenu] = useState("pengguna")
    return (
        <div>
            <div className="flex gap-4 md:gap-8 px-4 py-2 border w-fit rounded-md border-[#3A35411F]">
                <Button style={`border-b-2 rounded-none ${menu === "pengguna" ? "border-[#3ecf4c] text-[#333333AD]" : "border-transparent"}`} onClick={()=> setMenu("pengguna")}>Pengguna</Button>
                <Button style={`border-b-2 rounded-none ${menu === "koleksi" ? "border-[#3ecf4c] text-[#333333AD]" : "border-transparent"}`} onClick={()=> setMenu("koleksi")}>Koleksi</Button>
            </div>
            <div className="inset-0 absolute w-full h-full bg-black/70">
                <div className="flex w-full h-full justify-center items-center">
                   <TempleatForam>
                        <TempleatForam.Header heading="Tambah Pengguna" text=""/>
                   </TempleatForam>
                </div>
            </div>
            <div>
                {
                    menu === "pengguna" ?
                    <div className="mt-6 border-2 border-[#3A35411F] rounded-md">
                        <div className="flex justify-between items-center py-2 px-12 border-b-2 border-[#3A35411F]">
                            <Text size="medium1" color="tertiary">Pengguna</Text>
                            <div className="hidden md:grid grid-cols-3 gap-12">
                                <Text size="medium1" color="tertiary">Update</Text>
                                <Text size="medium1" color="tertiary">Hapus</Text>
                                <Text size="medium1" color="tertiary">Create</Text>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 py-4 px-6">
                            {
                                users.map((user)=> (
                                    <div key={user.id} className="flex justify-between items-center">
                                        <Text size="medium1" color="tertiary">{user.name}</Text>
                                        <div className="grid grid-cols-[0.5fr_0.5fr_1fr] md:grid-cols-3 gap-2 md:gap-0 items-center">
                                            <RiEdit2Line className=" bg-[#3ecf4c] w-7 h-7 md:w-9 md:h-9 p-2 rounded-full" />
                                            <RiDeleteBin7Line className=" bg-red-600 w-7 h-7 md:w-9 md:h-9 p-2 rounded-full" />
                                            <Button size="medium1" color="tertiary" style="text-[#3ecf4c] bg-[#E2FCD9CC]">+ Add</Button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div> : 
                    <div>

                    </div>
                }
            </div>
        </div>
    )
}

export default Data;