import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_app/purchase/')({
  component: PurchasePage
})


function PurchasePage() {
    return <div>PurchasePage</div>
}