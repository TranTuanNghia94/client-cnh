import { QUERIES } from "@/lib/constants"
import { getAllTypes } from "@/services/type"
import { IPaginationAndSearch } from "@/types/api"
import { IGroupOfGoodsRequest, IGroupOfGoodsWhere } from "@/types/type"
import { useMutation } from "@tanstack/react-query"
import { useToast } from "./use-toast"


export const useGetTypes = () => {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationKey: [QUERIES.GROUP_OF_GOODS],
        mutationFn: async (payload?: IPaginationAndSearch<IGroupOfGoodsWhere, unknown>) => {
            const request: IGroupOfGoodsRequest = {
                ...payload,
            }

            if (payload?.orderBy) {
                request.orderBy = payload.orderBy
            }

            return await getAllTypes(request)
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