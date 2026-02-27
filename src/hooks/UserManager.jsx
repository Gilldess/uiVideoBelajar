import { useEffect, useState } from "react"

export const UserManager = (users) => {
        const [data, setData] = useState(()=> {
        const localData = localStorage.getItem("userdata")
        return localData ? JSON.parse(localData) : users
    })

    useEffect(()=> {
        localStorage.setItem("userdata", JSON.stringify(data))
    }, [data])

    const [edit, setEdit] = useState(null)
    const [editValue, setEditValue] = useState("")
    const [cancel, setCancel] = useState(false)
    const [menu, setMenu] = useState("pengguna")

    const HandleCreate = () => {
        if (editValue.trim() === "") {
            alert("Nama tidak boleh kosong")
            return;
        };
        const newData ={
            id: Date.now(),
            name: editValue
        }
        setData([...data, newData])
        setEditValue("")
        setCancel(false)
    }

    const handleDelete = (id)=> {
        const confirmDelete = window.confirm("Anda yakin ingin menghapus data ini?")
        if (!confirmDelete) return; 
        const updateDataUsers = data.filter((user)=> user.id !== id)
        setData(updateDataUsers)
    }
    const handleEdit = (user)=> {
        setEdit(user.id)
        setEditValue(user.name)
        setCancel(true)
    }
    const HandleCancel = () => {
        setCancel(false)
        setEdit(null);
        setEditValue("")
    }
    const HandleUpdate = () => {
        const updateDataUsers = data.map((user)=> 
        user.id === edit ? {...user, name: editValue} : user
        )
        setData(updateDataUsers)
        HandleCancel()
    }
    
    return {data, setData, edit, setEdit, editValue, setEditValue, cancel, setCancel, menu, setMenu, HandleCreate, handleDelete, handleEdit, HandleCancel, HandleUpdate,}
}