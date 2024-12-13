import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_app/inventory-out/')({
  component: InventoryOutPage
})

function InventoryOutPage() {
  return <div>Hello /_app/inventory-out/!</div>
}
