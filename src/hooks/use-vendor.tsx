import { QUERIES } from "@/lib/constants"
import { getAllVendors } from "@/services/vendor"
import { IPaginationAndSearch } from "@/types/api"
import { IVendorRequest, IVendorWhere } from "@/types/vendor"
import { useMutation } from "@tanstack/react-query"
import { useToast } from "./use-toast"


export const useGetVendors = () => {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationKey: [QUERIES.VENDORS],
        mutationFn: async (payload?: IPaginationAndSearch<IVendorWhere, unknown>) => {
            const request: IVendorRequest = {
                ...payload,
            }

            if (payload?.orderBy) {
                request.orderBy = payload.orderBy
            }

            return await getAllVendors(request)
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