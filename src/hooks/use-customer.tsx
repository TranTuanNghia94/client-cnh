import { QUERIES } from "@/lib/constants"
import { getAllCustomers } from "@/services/customer"
import { IPaginationAndSearch } from "@/types/api"
import { ICustomerRequest, ICustomerWhere } from "@/types/customer"
import { useMutation } from "@tanstack/react-query"
import { useToast } from "./use-toast"


export const useGetCustomers = () => {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationKey: [QUERIES.CUSTOMERS],
        mutationFn: async (payload?: IPaginationAndSearch<ICustomerWhere, unknown>) => {
            const request: ICustomerRequest = {
                ...payload,
            }

            if (payload?.orderBy) {
                request.orderBy = payload.orderBy
            }

            return await getAllCustomers(request)
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