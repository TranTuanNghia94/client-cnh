import HeaderPageLayout from '@/components/layout/HeaderPage'
import CreateCustomerAddress from '@/components/modal/customer/customer-address-create'
import { CustomerAddressColumns } from '@/components/table/customer/column-customer-address'
import { DataTableDetail } from '@/components/table/data-table-detail'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ICustomerAddressInput } from '@/types/customer'
import { createLazyFileRoute } from '@tanstack/react-router'
import React, { useState } from 'react'

export const Route = createLazyFileRoute('/_app/customer/new')({
  component: NewCustomerPage
})

function NewCustomerPage() {
  const [listAddress, setListAddress] = useState<ICustomerAddressInput[]>([])

  const handleAddCustomerAddress = (data: ICustomerAddressInput) => {
    setListAddress([...listAddress, data])
  }

  const handleDeleteCustomerAddress = (index: number) => {
    const newList = [...listAddress]
    newList.splice(index, 1)
    setListAddress(newList)
}

const handleUpdateCustomerAddress = (index: number, data: ICustomerAddressInput) => {
    const newList = [...listAddress]
    newList[index] = data
    setListAddress(newList)
}

  return (
    <div>
      <HeaderPageLayout title="Thêm khách hàng" idForm="formCreateCustomer" />

      <div className="grid grid-cols-3 gap-x-4">
        <Card className="mt-4">
          <CardHeader>
            <CardTitle className="uppercase">Thông tin chung</CardTitle>
          </CardHeader>
          <CardContent>
            <form id="formCreateCustomer">
              <div className="grid grid-cols-3 mt-4">
                <Label className="text-xs" htmlFor="maKhachHang">Mã khách hàng <span className="text-red-600">*</span></Label>
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


        <div className="col-span-2 mt-4">
          <Card>
            <CardContent>
              <div className="mt-4">
                <DataTableDetail listTools={<CreateCustomerAddress saveDetail={handleAddCustomerAddress} />}
                   data={listAddress.map((item, index) => ({
                    ...item,
                    deleteRow: () => handleDeleteCustomerAddress(index),
                    updateRow: (val: ICustomerAddressInput) => handleUpdateCustomerAddress(index, val)
                }))}

                columns={CustomerAddressColumns}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}