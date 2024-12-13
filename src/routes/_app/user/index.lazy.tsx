import { DataTable } from '@/components/table/data-table'
import { UserColumns } from '@/components/table/user/columns'
import { Button } from '@/components/ui/button'
import { useGetUsers } from '@/hooks/use-user'
import { IUserWhere } from '@/types'
import { IPaginationAndSearch } from '@/types/api'
import { createLazyFileRoute, Outlet, useNavigate } from '@tanstack/react-router'
import { useMemo } from 'react'

export const Route = createLazyFileRoute('/_app/user/')({
  component: UserPage,
})

function UserPage() {
  const navigate = useNavigate()
  const { mutateAsync, data } = useGetUsers()

  const queryAllUsers = async (req?: IPaginationAndSearch<IUserWhere>) => {
    await mutateAsync({ ...req, });
  };

  const listTools = useMemo(() => {
    return (
      <div className='flex gap-2'>
        <Button size="sm" variant="outline" onClick={() => navigate({ to: "/user/new" })}>Tạo mới</Button>
      </div>
    )
  }, [])

  return (
    <div>
      <DataTable listTools={listTools}
        fetchData={(req) => queryAllUsers(req as IPaginationAndSearch<IUserWhere>)}
        total={data?.metadata?.total} title='DANH SÁCH NGƯỜI DÙNG'
        data={data?.results?.map((item) => ({ ...item, refetch: queryAllUsers })) || []} 
        columns={UserColumns} />
      <Outlet />
    </div>
  )
}
