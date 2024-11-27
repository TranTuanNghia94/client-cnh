import HeaderPageLayout from '@/components/layout/HeaderPage'
import SellDetail from '@/components/modal/sell/sell-detail'
import { DataTableDetail } from '@/components/table/data-table-detail'
import { SellDetailColumns } from '@/components/table/sell/columns-sell-detail'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { QUERIES } from '@/lib/constants'
import { ISellDetailInput } from '@/types/sell'
import { useQueryClient } from '@tanstack/react-query'
import { createLazyFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createLazyFileRoute('/_app/sell/new')({
    component: NewSellPage
})


function NewSellPage() {
    const [listDetail, setListDetail] = useState<ISellDetailInput[]>([])
    const queryClient = useQueryClient()

    const handleAddDetail = (data: ISellDetailInput) => {
        setListDetail([...listDetail, data])

        queryClient.setQueryData([QUERIES.ADD_SELL_DETAIL], (old: ISellDetailInput[]) => {
            return [...old, data]
        })
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
                            <form>
                                <div>
                                    <Label className="text-xs" htmlFor="maHangHoa">
                                        Số hợp đồng <span className="text-red-600">*</span>
                                    </Label>
                                    <Input name="maHangHoa" maxLength={200} required className="col-span-2" />
                                </div>

                                <div className="my-3">
                                    <Label className="text-xs" htmlFor="maHangHoa">
                                        Khách hàng <span className="text-red-600">*</span>
                                    </Label>
                                    <Input name="maHangHoa" maxLength={200} required className="col-span-2" />
                                </div>

                                <div className="my-3">
                                    <Label className="text-xs" htmlFor="maHangHoa">
                                        Ngày hợp đồng <span className="text-red-600">*</span>
                                    </Label>
                                    <Input name="maHangHoa" maxLength={200} required className="col-span-2" />
                                </div>

                                <div className="my-3">
                                    <Label className="text-xs" htmlFor="maHangHoa">
                                        Deadline <span className="text-red-600">*</span>
                                    </Label>
                                    <Input name="maHangHoa" maxLength={200} required className="col-span-2" />
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
                                    <Input name="maHangHoa" maxLength={200} required className="col-span-2" />
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
                                    <Textarea name="maHangHoa" maxLength={200} required className="col-span-2" />
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                <div className="col-span-3">
                    <Card className="mt-4">
                        <CardContent>
                            <div className="mt-4">
                                <DataTableDetail listTools={<SellDetail addDetail={handleAddDetail} />} data={listDetail as unknown as ISellDetailInput[]} columns={SellDetailColumns} />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div >
    )
}