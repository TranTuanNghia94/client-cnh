import { DataTable } from '@/components/table/data-table'
import { GoodsColumns } from '@/components/table/goods/columns'
import { useGetGoods } from '@/hooks/use-goods'
import { IPaginationAndSearch } from '@/types/api'
import { IGoodsResponse, IGoodsWhere } from '@/types/goods'
import { createLazyFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_app/goods/')({
  component: GoodsPage
})


function GoodsPage() {
    const { mutate, data } = useGetGoods()

    const queryAllTypes = (req?: IPaginationAndSearch<IGoodsWhere>) => {
        mutate({ ...req, });
    }

    return (
        <div>
            <DataTable fetchData={(req) => queryAllTypes(req as IPaginationAndSearch<IGoodsWhere>)} total={data?.metadata?.total} title='DANH SÁCH HÀNG HOÁ' data={data?.results as IGoodsResponse[] || []} columns={GoodsColumns} />
            <Outlet />
        </div>
    )
}