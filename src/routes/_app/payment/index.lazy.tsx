import { DataTable } from '@/components/table/data-table'
import { PaymentColumns } from '@/components/table/payment/columns'
import { useGetPayments } from '@/hooks/use-payment'
import { IPaginationAndSearch } from '@/types/api'
import { IPaymentResponse, IPaymentWhere } from '@/types/payment'
import { createLazyFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_app/payment/')({
  component: PaymentPage
})

function PaymentPage() {
  const { mutate, data } = useGetPayments()


  const queryAllTypes = (req?: IPaginationAndSearch<IPaymentWhere>) => {
    mutate({ ...req, });
  }

  return (
    <div>
      <DataTable fetchData={(req) => queryAllTypes(req as IPaginationAndSearch<IPaymentWhere>)} total={data?.metadata?.total} title='DANH SÁCH ĐỀ NGHỊ THANH TOÁN' data={data?.results as IPaymentResponse[] || []} columns={PaymentColumns} />
      <Outlet />
    </div>
  )
}