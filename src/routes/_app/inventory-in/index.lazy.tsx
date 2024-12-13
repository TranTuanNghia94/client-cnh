import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_app/inventory-in/')({
  component: InventoryInPage
})


function InventoryInPage() {
    return <div>Hello /_app/inventory-in/!</div>
}
