import { useState } from "react";
import useApiVideo from "../stores/useApiVideo";
import { useShallow } from "zustand/shallow";

export const UseVideoManager = () => {

        const {dataVideo, createVideo, deleteVideoId, editVideo} = useApiVideo(useShallow((state) => ({
            dataVideo: state.dataVideo,
            createVideo: state.createVideo,
            deleteVideoId: state.deleteVideoId,
            editVideo: state.editVideo
        })))
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
        const handleSubmit = async (e)=> {
            e.preventDefault();
            if (isEdit) {
               await editVideo(foramData.id, foramData)
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
               await createVideo(newData)
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
        const deletVideo = async (id) => {
            const confrim = window.confirm("Anda yakin ingin menghapus data ini?")
            if (!confrim) return;
            await deleteVideoId(id)
        }
        return {dataVideo, foramData, setForamData, open, setOpen, isEdit, setIsEdit, handleChange, handleSubmit, handleRubah, deletVideo}
}