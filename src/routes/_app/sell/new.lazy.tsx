import HeaderPageLayout from '@/components/layout/HeaderPage'
import SellDetail from '@/components/modal/sell/sell-detail'
import { DataTableDetail } from '@/components/table/data-table-detail'
import { SellDetailColumns } from '@/components/table/sell/columns-sell-detail'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ISellDetailInput } from '@/types/sell'
import { createLazyFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createLazyFileRoute('/_app/sell/new')({
    component: NewSellPage
})


function NewSellPage() {
    const [listDetail, setListDetail] = useState<ISellDetailInput[]>([])

    const handleAddDetail = (data: ISellDetailInput) => {
        setListDetail([...listDetail, data])
    }

    const handleDeleteDetail = (index: number) => {
        const newList = [...listDetail]
        newList.splice(index, 1)
        setListDetail(newList)
    }

    const handleUpdateDetail = (index: number, data: ISellDetailInput) => {
        const newList = [...listDetail]
        newList[index] = data
        setListDetail(newList)
    }

    return (
        <div >
            <HeaderPageLayout idForm="createSellForm" title="Thêm đơn bán hàng" />

            <div className="grid grid-cols-4 gap-x-4">
                <div>
                    <Card className="mt-4">
                        <CardHeader>
                            <CardTitle>Thông tin đơn hàng</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form id="createSellForm">
                                <div className="my-3">
                                    <Label className="text-xs" htmlFor="maKhachHang">
                                        Khách hàng <span className="text-red-600">*</span>
                                    </Label>
                                    <Button type="button" size="sm" >Chọn</Button>
                                </div>

                                <div>
                                    <Label className="text-xs" htmlFor="soHopDong">
                                        Số hợp đồng <span className="text-red-600">*</span>
                                    </Label>
                                    <Input name="soHopDong" maxLength={200} required className="col-span-2" />
                                </div>

                                <div className="my-3">
                                    <Label className="text-xs" htmlFor="maHangHoa">
                                        Ngày hợp đồng <span className="text-red-600">*</span>
                                    </Label>
                                    <Input name="ngayTao" type="date" maxLength={200} required className="col-span-2" />
                                </div>

                                <div className="my-3">
                                    <Label className="text-xs" htmlFor="hanThanhToan">
                                        Deadline <span className="text-red-600">*</span>
                                    </Label>
                                    <Input name="hanThanhToan" type="date" className="col-span-2" />
                                </div>
                            </form>
                        </CardContent>
                    </Card>

                    <Card className="mt-4">
                        <CardHeader>
                            <CardTitle>Thông tin giao hàng</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div>
                                    <Label className="text-xs" htmlFor="maHangHoa">
                                        Người liên hệ <span className="text-red-600">*</span>
                                    </Label>
                                    <Button type="button" size="sm" >Chọn</Button>
                                </div>

                                <div className="my-3">
                                    <Label className="text-xs" htmlFor="maHangHoa">
                                        SDT <span className="text-red-600">*</span>
                                    </Label>
                                    <Input name="maHangHoa" maxLength={200} required className="col-span-2" />
                                </div>

                                <div className="my-3">
                                    <Label className="text-xs" htmlFor="maHangHoa">
                                        Địa chỉ <span className="text-red-600">*</span>
                                    </Label>
                                    <Input name="maHangHoa" maxLength={200} required className="col-span-2" />
                                </div>

                                <div className="my-3">
                                    <Label className="text-xs" htmlFor="maHangHoa">
                                        Ghi chú <span className="text-red-600">*</span>
                                    </Label>
                                    <Textarea name="ghiChu" maxLength={200} required className="col-span-2" />
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                <div className="col-span-3">
                    <Card className="mt-4">
                        <CardContent>
                            <div className="mt-4">
                                <DataTableDetail
                                    listTools={<SellDetail saveDetail={handleAddDetail} />}
                                    data={listDetail.map((item, index) => ({
                                        ...item,
                                        deleteRow: () => handleDeleteDetail(index),
                                        updateRow: (val: ISellDetailInput) => handleUpdateDetail(index, val)
                                    }))}
                                    columns={SellDetailColumns} />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div >
    )
}