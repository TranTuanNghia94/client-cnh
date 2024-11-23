import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_app/setting')({
  component: () => <div>Hello /_app/setting!</div>,
})
