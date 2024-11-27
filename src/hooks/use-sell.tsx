import { QUERIES } from "@/lib/constants"
import { getAllSells } from "@/services/sell"
import { IPaginationAndSearch } from "@/types/api"
import { ISellRequest, ISellWhere } from "@/types/sell"
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
