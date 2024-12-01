import { QUERIES } from "@/lib/constants"
import { createSell, deleteSell, deleteSellDetail, getAllSells, updateSell, updateSellDetail } from "@/services/sell"
import { IPaginationAndSearch } from "@/types/api"
import { ISellDetailInput, ISellInput, ISellRequest, ISellWhere } from "@/types/sell"
import { useMutation } from "@tanstack/react-query"
import { useToast } from "./use-toast"

export const useGetSells = () => {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationKey: [QUERIES.SELLS],
        mutationFn: async (payload?: IPaginationAndSearch<ISellWhere, unknown>) => {
            const request: ISellRequest = {
                include: {
                    CreatedBy: true,
                    KhachHang: true
                },
                ...payload,
            }

            if (payload?.orderBy) {
                request.orderBy = payload.orderBy
            }

            return await getAllSells(request)
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

export const useGetSellByOrderCode = () => {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationKey: [QUERIES.GET_SELL],
        mutationFn: async (code: string) => {
            const request: ISellRequest = {
                where: {
                    orderNumber: code
                },
                include: {
                    KhachHang: true,
                    ChiTietDonHang_s: true,
                    LienHeGiaoHang: true,
                }
            }
            return await getAllSells(request)
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

export const useUpdateSell = () => {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationKey: [QUERIES.UPDATE_SELL],
        mutationFn: async (payload?: ISellInput) => {
            const request: ISellRequest = {
                where: {
                    id: payload?.id
                },
                data: payload
            }

            return await updateSell(request)
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

export const useCreateSell = () => {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationKey: [QUERIES.CREATE_SELL],
        mutationFn: async (payload?: ISellInput) => {
            const request: ISellRequest = {
                data: payload
            }

            return await createSell(request)
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

export const useDeleteSell = () => {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationKey: [QUERIES.UPDATE_SELL],
        mutationFn: async (id: string) => {
            const request: ISellRequest = {
                where: {
                    id
                }
            }

            return await deleteSell(request)
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

export const useUpdateSellDetail = () => {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationKey: [QUERIES.UPDATE_SELL_DETAIL],
        mutationFn: async (payload?: ISellDetailInput) => {
            const request: ISellRequest = {
                where: {
                    id: payload?.id
                },
                data: payload
            }

            return await updateSellDetail(request)
        },
        onError(error: Error) {
            toast({
                variant: "destructive",
                title: "Có lỗi xảy ra",
                description: error.message,
            })
        }
    })

    return mutation
}

export const useDeleteSellDetail = () => {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationKey: [QUERIES.UPDATE_SELL_DETAIL],
        mutationFn: async (id: string) => {
            const request: ISellRequest = {
                where: {
                    id
                }
            }

            return await deleteSellDetail(request)
        },
        onError(error: Error) {
            toast({
                variant: "destructive",
                title: "Có lỗi xảy ra",
                description: error.message,
            })
        }
    })

    return mutation
}