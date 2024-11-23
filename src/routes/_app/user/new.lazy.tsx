import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { ChevronLeft } from 'lucide-react'

export const Route = createLazyFileRoute('/_app/user/new')({
  component: NewUser,
})


function NewUser() {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center my-2">
          <div className='flex gap-x-4'>
            <Button size="icon" variant="default" className="h-7 w-7">
              <Link to={'/user'} className="flex gap-x-1 text-primary-foreground">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Huỷ</span>
              </Link>
            </Button>
            <div className="font-bold">TẠO TÀI KHOẢN</div>
          </div>

          <div className="flex gap-x-2">
            <Button size="sm">
              <span>Lưu</span>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-2 mt-8">
          <Card>
            <CardContent>
              <CardTitle className="-mt-2">Tài khoản</CardTitle>
              <form className='my-3'>
                <div className='my-3 grid grid-cols-2 gap-x-4'>
                  <div>
                    <Label className="text-xs" htmlFor="lastName">Họ <span>*</span></Label>
                    <Input id="lastName" name="lastName" required minLength={2} maxLength={100} />
                  </div>

                  <div>
                    <Label className="text-xs" htmlFor="firstName">Tên <span>*</span></Label>
                    <Input id="firstName" name="firstName" required minLength={2} maxLength={100} />
                  </div>
                </div>

                <div className='my-3'>
                  <Label className="text-xs" htmlFor="phoneNumber">Số điện thoại <span>*</span></Label>
                  <Input id="phoneNumber" name="phoneNumber" required type="number" minLength={9} maxLength={20} />
                </div>

                <div className='my-3'>
                  <Label className="text-xs" htmlFor="email">Email <span>*</span></Label>
                  <Input id="email" name="email" required type="email" minLength={12} maxLength={200} />
                </div>

                <div className='my-3'>
                  <Label className="text-xs" htmlFor="department">Chi nhánh<span>*</span></Label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Chọn chi nhánh" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Chi nhánh</SelectLabel>
                        <SelectItem value="apple">Q1</SelectItem>
                        <SelectItem value="banana">Q2</SelectItem>
                        <SelectItem value="blueberry">Q3</SelectItem>
                        <SelectItem value="grapes">Q12</SelectItem>
                        <SelectItem value="pineapple">Gò Vấp</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <CardTitle className="-mt-2 ">Phân quyền</CardTitle>

              <form>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="Email" type="email" />
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}