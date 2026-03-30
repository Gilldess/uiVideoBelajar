import { useState } from "react";
import { addVideo, updateVideo, deletDataVideo } from "../stores/redux/videoReducer";
import { useDispatch } from "react-redux";

export const UseVideoManager = () => {
        const dispatch = useDispatch()
        const [foramData, setForamData] = useState({
            id: null,
            name: "",
            job: "",
            title: "",
            sub: "",
            imgvideo: "",
            avatar: "",
            rate: "3.5 (86)",
            harga: "",

        })
        const [open, setOpen] = useState(false)
        const [isEdit, setIsEdit] = useState(false)
        const handleChange = (e) => {
            const {name, value} = e.target;
            setForamData({...foramData, [name]: value})
        }
        const handleSubmit = (e)=> {
            e.preventDefault();
            if (isEdit) {
                dispatch(updateVideo({id: foramData.id, items: foramData}))
            } else {
                const newData = {
                id: Date.now(),
                name: foramData.name,
                job: foramData.job,
                title: foramData.title,
                sub: foramData.sub,
                imgvideo: foramData.imgvideo,
                avatar: foramData.avatar,
                rate: foramData.rate,
                harga: foramData.harga,
               }
                dispatch(addVideo(newData))
            }
            setForamData({
                name: "",
                job: "",
                title: "",       
                sub: "",
                imgvideo: "",
                avatar: "",
                harga: "",
            })
            setOpen(false)
        }
        const handleRubah = (video) => {
            setForamData(video)
            setIsEdit(true);
            setOpen(true)
    }
        const deletVideo = (id) => {
            const confrim = window.confirm("Anda yakin ingin menghapus data ini?")
            if (!confrim) return;
            dispatch(deletDataVideo(id))
        }
        return {foramData, setForamData, open, setOpen, isEdit, setIsEdit, handleChange, handleSubmit, handleRubah, deletVideo}
}