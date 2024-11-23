import { QUERIES } from "@/lib/constants"
import { getAllGoods } from "@/services/goods"
import { IPaginationAndSearch } from "@/types/api"
import { IGoodsRequest, IGoodsWhere } from "@/types/goods"
import { useMutation } from "@tanstack/react-query"
import { useToast } from "./use-toast"


export const useGetGoods = () => {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationKey: [QUERIES.GOODS],
        mutationFn: async (payload?: IPaginationAndSearch<IGoodsWhere, unknown>) => {
            const request: IGoodsRequest = {
                include: {
                    LoaiHang: true
                },
                ...payload,
            }

            if (payload?.orderBy) {
                request.orderBy = payload.orderBy
            }

            return await getAllGoods(request)
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