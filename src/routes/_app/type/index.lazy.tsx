import { DataTable } from '@/components/table/data-table'
import { TypeColumns } from '@/components/table/type/columns'
import { useGetTypes } from '@/hooks/use-type'
import { IPaginationAndSearch } from '@/types/api'
import { IGroupOfGoodsResponse, IGroupOfGoodsWhere } from '@/types/type'
import { createLazyFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_app/type/')({
    component: TypePage
})


function TypePage() {
    const { mutate, data } = useGetTypes()

    const queryAllTypes = (req?: IPaginationAndSearch<IGroupOfGoodsWhere>) => {
        mutate({ ...req, });
    }

    return (
        <div>
            <DataTable fetchData={(req) => queryAllTypes(req as IPaginationAndSearch<IGroupOfGoodsWhere>)} total={data?.metadata?.total} title='DANH SÁCH NHÓM HÀNG' data={data?.results as IGroupOfGoodsResponse[] || []} columns={TypeColumns} />
            <Outlet />
        </div>
    )
}