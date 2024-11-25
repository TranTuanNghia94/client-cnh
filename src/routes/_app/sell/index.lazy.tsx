import { DataTable } from '@/components/table/data-table';
import { SellsColumns } from '@/components/table/sell/columns';
import { Button } from '@/components/ui/button';
import { useGetSells } from '@/hooks/use-sell';
import { IPaginationAndSearch } from '@/types/api';
import { ISellResponse, ISellWhere } from '@/types/sell';
import { createLazyFileRoute, Outlet, useNavigate } from '@tanstack/react-router'
import { useMemo } from 'react';

export const Route = createLazyFileRoute('/_app/sell/')({
    component: SellPage
})


function SellPage() {
    const navigate = useNavigate()
    const { mutateAsync, data } = useGetSells()


    const queryAllSells = async (req?: IPaginationAndSearch<ISellWhere>) => {
        await mutateAsync({ ...req, });
    }


    const listTools = useMemo(() => {
        return (
            <div className='flex gap-2'>
                <Button size="sm" variant="outline" onClick={() => navigate({ to: "/sell/new" })}>Tạo mới</Button>
            </div>
        )
    }, [])

    return (
        <div>
            <DataTable listTools={listTools} fetchData={(req) => queryAllSells(req as IPaginationAndSearch<ISellWhere>)} total={data?.metadata?.total} title='DANH SÁCH ĐƠN HÀNG' data={data?.results as ISellResponse[] || []} columns={SellsColumns} />
            <Outlet />
        </div>
    )
}