import { collectionVideo } from "../config/dataVideo";
import { useEffect, useState } from "react";

export const UseVideoManager = () => {

        const [dataVideo, setDataVideo] = useState(()=> {
            const localData = localStorage.getItem("video")
            return localData ? JSON.parse(localData) : collectionVideo
        })
        useEffect(()=> {
            localStorage.setItem("video", JSON.stringify(dataVideo))
        },[dataVideo])
    
        const [foramData, setForamData] = useState({
            id: null,
            name: "",
            job: "",
            title: "Title video default",
            sub: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sunt.",
            img: collectionVideo[0].img,
            profil: collectionVideo[0].profil,
            rate: "3.5 (86)",
            imgrate: collectionVideo[0].imgrate,
            price: "Rp 300K",

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
                setDataVideo(dataVideo.map(item => (item.id === foramData.id ? foramData : item)))
                setIsEdit(false)
            } else {
               const newData = {...foramData, id: Date.now()};
               setDataVideo([...dataVideo, newData])
            }
    
            setForamData({
                id: null,
                name: "",
                job: "",
                title: "",
                sub: "",
            })
            setOpen(false)
        }
        const handleRubah = (video) => {
            setForamData(video)
            setIsEdit(true);
            setOpen(true)
    }
        const deletVideo = (id) => {
            if(window.confirm("Anda yakin ingin menghapus data ini?")) {
                setDataVideo(dataVideo.filter(item => item.id !== id))
            }
        }
        return {dataVideo, setDataVideo, foramData, setForamData, open, setOpen, isEdit, setIsEdit, handleChange, handleSubmit, handleRubah, deletVideo}
}