import { DataTable } from '@/components/table/data-table'
import { UserColumns } from '@/components/table/user/columns'
import { useGetUsers } from '@/hooks/use-user'
import { IUserResponse, IUserWhere } from '@/types'
import { IPaginationAndSearch } from '@/types/api'
import { createLazyFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_app/user/')({
  component: UserPage,
})

function UserPage() {
  const { mutateAsync, data } = useGetUsers()


  const queryAllUsers = async (req?: IPaginationAndSearch<IUserWhere>) => {
    await mutateAsync({ ...req, });
  };


  return (
    <div>
      <DataTable fetchData={(req) => queryAllUsers(req as IPaginationAndSearch<IUserWhere>)} total={data?.metadata?.total} title='DANH SÁCH NGƯỜI DÙNG' data={data?.results as IUserResponse[] || []} columns={UserColumns} />
      <Outlet />
    </div>
  )
}
