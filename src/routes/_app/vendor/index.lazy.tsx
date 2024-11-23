import { DataTable } from '@/components/table/data-table'
import { VendorColumns } from '@/components/table/vendor/columns'
import { useGetVendors } from '@/hooks/use-vendor'
import { IPaginationAndSearch } from '@/types/api'
import { IVendorResponse, IVendorWhere } from '@/types/vendor'
import { createLazyFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_app/vendor/')({
    component: VendorPage
})


function VendorPage() {
    const { mutate, data } = useGetVendors()


    const queryAllVendors = (req?: IPaginationAndSearch<IVendorWhere>) => {
        mutate({ ...req, });
    }


    return (
        <div>
            <DataTable fetchData={(req) => queryAllVendors(req as IPaginationAndSearch<IVendorWhere>)} total={data?.metadata?.total} title='DANH SÁCH NHÀ CUNG CẤP' data={data?.results as IVendorResponse[] || []} columns={VendorColumns} />
            <Outlet />
        </div>
    )
}