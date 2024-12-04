import { QUERIES } from "@/lib/constants"
import { changePassword, createUser, disableUser, getAllRoles, getAllUsers, getMe, updateUser } from "@/services/user"
import { IUserInput, IUserRequest, IUserWhere } from "@/types"
import { IPaginationAndSearch } from "@/types/api"
import { useMutation } from "@tanstack/react-query"
import { useToast } from "./use-toast"


export const useGetUsers = () => {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationKey: [QUERIES.USERS],
        mutationFn: async (payload?: IPaginationAndSearch<IUserWhere>) => {
            const request: IUserRequest = {
                include: {
                    Assignment: {
                        select: {
                            Roles: true,
                        },
                    },
                },
                ...payload
            }

            return await getAllUsers(request)
        },
        onError(error: Error) {
            toast({
                variant: "destructive",
                title: "Có lỗi xảy ra",
                description: error.message,
            })
        },
    })

    return mutation
}

export const useGetMe = () => {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationKey: [QUERIES.ME],
        mutationFn: async () => {
            return await getMe()
        },
        onError(error: Error) {
            toast({
                variant: "destructive",
                title: "Có lỗi xảy ra",
                description: error.message,
            })
        },

    })

    return mutation
}

export const useChangePassword = () => {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationKey: [QUERIES.CHANGE_PASSWORD],
        mutationFn: async (data: { oldPwd: string, newPwd: string }) => {
            return await changePassword(data)
        },
        onError(error: Error) {
            toast({
                variant: "destructive",
                title: "Có lỗi xảy ra",
                description: error.message,
            })
        },

    })

    return mutation
}

export const useGetAllRoles = () => {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationKey: [QUERIES.ALL_ROLES],
        mutationFn: async () => {
            return await getAllRoles()
        },
        onError(error: Error) {
            toast({
                variant: "destructive",
                title: "Có lỗi xảy ra",
                description: error.message,
            })
        },
    })

    return mutation
}

export const useDisableUser = () => {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationKey: [QUERIES.DISABLE_USER],
        mutationFn: async (data: { id: string }) => {
            return await disableUser(data)
        },
        onError(error: Error) {
            toast({
                variant: "destructive",
                title: "Có lỗi xảy ra",
                description: error.message,
            })
        },
    })

    return mutation
}

export const useCreateUser = () => {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationKey: [QUERIES.CREATE_USER],
        mutationFn: async (payload: IUserInput) => {
            const request: IUserRequest = {
                data: payload   
            }

            return await createUser(request)
        },
        onError(error: Error) {
            toast({
                variant: "destructive",
                title: "Có lỗi xảy ra",
                description: error.message,
            })
        },
    })

    return mutation
}

export const useUpdateUser = () => {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationKey: [QUERIES.UPDATE_USER],
        mutationFn: async (payload: IUserInput) => {
            const request: IUserRequest = {
                data: payload
            }

            return await updateUser(request)
        },
        onError(error: Error) {
            toast({
                variant: "destructive",
                title: "Có lỗi xảy ra",
                description: error.message,
            })
        },
    })

    return mutation
}