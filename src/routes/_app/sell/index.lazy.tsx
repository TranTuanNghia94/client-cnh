import { DataTable } from '@/components/table/data-table';
import { SellsColumns } from '@/components/table/sell/columns';
import { useGetSells } from '@/hooks/use-sell';
import { IPaginationAndSearch } from '@/types/api';
import { ISellResponse, ISellWhere } from '@/types/sell';
import { createLazyFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_app/sell/')({
  component: SellPage
})


function SellPage() {
    const { mutate, data } = useGetSells()


    const queryAllSells = (req?: IPaginationAndSearch<ISellWhere>) => {
        mutate({ ...req, });
    }


    return (
        <div>
            <DataTable fetchData={(req) => queryAllSells(req as IPaginationAndSearch<ISellWhere>)} total={data?.metadata?.total} title='DANH SÁCH ĐƠN HÀNG' data={data?.results as ISellResponse[] || []} columns={SellsColumns} />
            <Outlet />
        </div>
    )
}