import HeaderPageLayout from '@/components/layout/HeaderPage'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ICustomerAddressInput } from '@/types/customer'
import { createLazyFileRoute } from '@tanstack/react-router'
import React from 'react'

export const Route = createLazyFileRoute('/_app/customer/new')({
  component: NewCustomerPage
})

function NewCustomerPage() {
  const [totalAddress, setTotalAddress] = React.useState<ICustomerAddressInput[]>([])

  const addAddress = () => {
    setTotalAddress([...totalAddress, {
      tenNguoiLienHe: '',
      soDienThoai: '',
    }])
  }

  const deleteAddress = (index: number) => {
    setTotalAddress((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div>
      <HeaderPageLayout title="Thêm khách hàng" />

      <div className="grid grid-cols-3 gap-x-4">
        <Card className="mt-4">
          <CardHeader>
            <CardTitle className="uppercase">Thông tin chung</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid grid-cols-3 mt-4">
                <Label className="text-xs" htmlFor="maKhachHang">Mã khách hàng <span>*</span></Label>
                <Input name="maKhachHang" required className="col-span-2" />
              </div>

              <div className="grid grid-cols-3 my-4">
                <Label className="text-xs" htmlFor="misaCode">Mã Misa</Label>
                <Input name="misaCode" className="col-span-2" />
              </div>

              <div className="grid grid-cols-3">
                <Label className="text-xs" htmlFor="tenKhachHang">Tên khách hàng</Label>
                <Textarea name="tenKhachHang" className="col-span-2" rows={4} />
              </div>
            </form>
          </CardContent>
        </Card>


        <div className="mt-4 col-span-2">
          <Card>
            <CardContent className="p-4 flex justify-between items-center">
              <CardTitle className="uppercase">Địa chỉ khách hàng</CardTitle>
              <Button size="sm" variant="secondary" onClick={addAddress}>Thêm địa chỉ</Button>
            </CardContent>
          </Card>


          {
            totalAddress.map((_, index) => {
              return (
                <Card key={index} className="my-2">
                  <CardContent className="p-4">
                    <div className="text-right"><Button variant="destructive" onClick={() => deleteAddress(index)} size="sm">Xoá</Button></div>
                    <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                      <div>
                        <Label className="text-xs" htmlFor="tenNguoiLienHe">Người liên hệ <span>*</span></Label>
                        <Input name="tenNguoiLienHe" className="col-span-2" />
                      </div>

                      <div>
                        <Label className="text-xs" htmlFor="soDienThoai">SĐT</Label>
                        <Input name="soDienThoai" className="col-span-2" />
                      </div>

                      <div>
                        <Label className="text-xs" htmlFor="email">Email</Label>
                        <Input name="email" className="col-span-2" />
                      </div>

                      <div>
                        <Label className="text-xs" htmlFor="soNhaTenDuong_1">Đia chỉ</Label>
                        <Textarea name="soNhaTenDuong_1" className="col-span-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}