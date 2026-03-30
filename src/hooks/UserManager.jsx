import { useState } from "react"
import { addUsers, deleteUsers, updateUsers } from "../stores/redux/usersReducer"
import { useDispatch } from "react-redux"

export const UserManager = () => {
    
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(null)
    const [editValue, setEditValue] = useState({name: "", email: "", nomer: ""})
    const [cancel, setCancel] = useState(false)

    const HandleCreate = (e) => {
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
        dispatch(addUsers(newData))
        setEditValue({name: "", email: "", nomer: ""})
        setCancel(false)
    }

    const handleDelete = (id)=> {
        const confirmDelete = window.confirm("Anda yakin ingin menghapus data ini?")
        if (!confirmDelete) return; 
        dispatch(deleteUsers(id))
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
    const HandleUpdate = (e) => {
        e.preventDefault();
        console.log(editValue)
        dispatch(updateUsers({id: editValue.id, data: editValue}))
        HandleCancel()
    }
    
    return { edit, setEdit, editValue, setEditValue, cancel, setCancel, HandleCreate, handleDelete, handleEdit, HandleCancel, HandleUpdate,}
}