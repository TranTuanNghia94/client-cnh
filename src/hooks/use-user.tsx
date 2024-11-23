import { QUERIES } from "@/lib/constants"
import { changePassword, getAllUsers, getMe } from "@/services/user"
import { IUserRequest, IUserWhere } from "@/types"
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