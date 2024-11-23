import HeaderPageLayout from '@/components/layout/HeaderPage'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_app/customer/new')({
  component: NewCustomerPage
})


function NewCustomerPage() {


  return (
    <div>
        <HeaderPageLayout title="Thêm khách hàng" />
    </div>
  )
}