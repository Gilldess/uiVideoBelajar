import { create } from "zustand";
import { persist } from "zustand/middleware";

const useListMenu = create(
    persist((set)=> ({
        listMenu: "pengguna",
        setListMenu: (value)=> set({ listMenu: value })
    }),
    {
        name: "list-menu"
    }
))

export default useListMenu