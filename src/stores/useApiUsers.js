import { create } from "zustand";
import { apiUsers } from "../server/apiUsers";

const useApiUsers = create((set)=> ({
    dataUsers: [],
    isError: null,
    isLoading: false,
    getAllUsers: async () => {
        set({isLoading: true})
        try {
            const data = await apiUsers.getUsers();
            set({dataUsers: data, isError: null})
        } catch (error) {
            set({isError: error.message})
        } finally {
            set({isLoading: false})
        }
    },
    postUsers: async (data) => {
        set({isLoading: true})
        try {
            const reponse = await apiUsers.createUser(data);
            const user = reponse
            set((state) => ({
                dataUsers: [...state.dataUsers, user],
                isError: null
            }))
        } catch (error) {
            set({isError: error.message})
        } finally {
            set({isLoading: false})
        }
    },
    deletUser: async (id) => {
        set({isLoading: true})
        try {
            await apiUsers.deleteUser(id);
            set((state) => ({
                dataUsers: state.dataUsers.filter((user) => user.id !== id),
                isError: null
            }))
        } catch (error) {
            set({isError: error.message})
        } finally {
            set({isLoading: false})
        }
    },
    editUser: async (id, data) => {
        set({isLoading: true})
        try {
            const response = await apiUsers.updateUser(id, data);
            const updateData = response
            set((state) => ({
                dataUsers: state.dataUsers.map((user) => user.id === id ? updateData : user),
                isError: null
            }))
        } catch (error) {
            set({isError: error.message})
        } finally {
            set({isLoading: false})
        }
    }
}))

export default useApiUsers;