import { useEffect, useState } from "react"
import useApiUsers from "../stores/useApiUsers"
import { useShallow } from "zustand/shallow"

export const UserManager = (users) => {
        const {postUsers, deletUser, editUser}=useApiUsers(useShallow ((state) => ({
            postUsers: state.postUsers,
            deletUser: state.deletUser,
            editUser: state.editUser
        })))
        const [data, setData] = useState(()=> {
        const localData = localStorage.getItem("userdata")
        return localData ? JSON.parse(localData) : users
    })

    useEffect(()=> {
        localStorage.setItem("userdata", JSON.stringify(data))
    }, [data])

    const [edit, setEdit] = useState(null)
    const [editValue, setEditValue] = useState({name: "", email: "", nomer: ""})
    const [cancel, setCancel] = useState(false)
    const [menu, setMenu] = useState("pengguna")

    const HandleCreate = async (e) => {
        e.preventDefault();
        if (editValue.name === "" || editValue.email === "" || editValue.nomer === "") {
            alert("Lengkapi Form Anda")
            return;
        };
        const newData ={
            id: Date.now(),
            name: editValue.name,
            email: editValue.email,
            nomer: editValue.nomer
        }
        await postUsers(newData)
        setEditValue({name: "", email: "", nomer: ""})
        setCancel(false)
    }

    const handleDelete = async (id)=> {
        const confirmDelete = window.confirm("Anda yakin ingin menghapus data ini?")
        if (!confirmDelete) return; 
        await deletUser(id)
    }
    const handleEdit = (user)=> {
        setEdit(user.id)
        setEditValue({id: user.id, name: user.name, email: user.email, nomer: user.nomer})
        setCancel(true)
    }
    const HandleCancel = () => {
        setCancel(false)
        setEdit(null);
        setEditValue({name: "", email: "", nomer: ""})
    }
    const HandleUpdate = async (e) => {
        e.preventDefault();
        await editUser(editValue.id, editValue)
        HandleCancel()
    }
    
    return {data, setData, edit, setEdit, editValue, setEditValue, cancel, setCancel, menu, setMenu, HandleCreate, handleDelete, handleEdit, HandleCancel, HandleUpdate,}
}