import HeaderPageLayout from '@/components/layout/HeaderPage'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useCreateUser } from '@/hooks/use-user'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_app/user/new')({
  component: NewUserPage,
})

function NewUserPage() {
  const { mutateAsync, data, isSuccess } = useCreateUser()


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fields = [
      'ho',
      'ten',
      'email',
      'phongBan',
    ]
  }


  return (
    <div>
      <HeaderPageLayout title='TẠO NGƯỜI DÙNG MỚI' idForm="formCreateUser" />

      <div className='mt-4'>
        <Card>
          <CardContent className="m-4">
            <form id="formCreateUser" className="grid grid-cols-1 gap-8">
              <div>
                <Label className="text-xs" htmlFor="lastname">Họ</Label>
                <Input name="lastname" maxLength={200} className="col-span-2" />
              </div>

              <div>
                <Label className="text-xs" htmlFor="firstname">Tên</Label>
                <Input name="firstname" maxLength={200} className="col-span-2" />
              </div>

              <div>
                <Label className="text-xs" htmlFor="phongBan">Phòng ban</Label>
                <Input name="phongBan" maxLength={200} className="col-span-2" />
              </div>

              <div>
                <Label className="text-xs" htmlFor="email">Email <span className="text-red-600">*</span></Label>
                <Input type="email" name="email" maxLength={200} required className="col-span-2" />
              </div>


              <div>
                <Label className="text-xs" htmlFor="pasword">Mật khẩu mặt định <span className="text-red-600">*</span></Label>
                <Input type="password" name="pasword" maxLength={200} required className="col-span-2" />
              </div>


              <div>
                <Label className="text-xs" htmlFor="email">Xác nhận mật khẩu <span className="text-red-600">*</span></Label>
                <Input type="password" name="re-password" maxLength={200} required className="col-span-2" />
              </div>


            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}