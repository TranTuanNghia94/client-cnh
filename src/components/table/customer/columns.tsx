import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ICustomerResponse } from "@/types/customer";
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreVertical } from "lucide-react";


export const CustomerColumns: ColumnDef<ICustomerResponse>[] = [
    {
        id: 'No.',
        header: 'No.',
        accessorKey: 'stt',
        cell: (a) =>{
            const numb = (a.row.index + 1) + (a.table.getState().pagination.pageIndex * (a.table.getState().pagination.pageSize))
            return  <div className="text-xs">{numb}</div>
        }

    },
    {
        id: 'Mã khách hàng',
        accessorKey: 'maKhachHang',
        header: ({ column }) => {
            return (
                <Button
                    size="sm"
                    variant="outline"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Mã khách hàng
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="text-xs">{row.original.maKhachHang}</div>

    },
    {
        id: 'Mã MISA',
        accessorKey: "misaCode",
        header: ({ column }) => {
            return (
                <Button
                    size="sm"
                    variant="outline"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Mã MISA
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase text-xs">{row.original.misaCode}</div>,
    },
    {
        id: 'Tên khách hàng',
        accessorKey: 'tenKhachHang',
        header: ({ column }) => {
            return (
                <Button
                    size="sm"
                    variant="outline"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Tên khách hàng
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="text-xs">{row.original.tenKhachHang}</div>,
    },
    {
        id: 'actions',
        header: '',
        cell: ({ row }) => {
            const item = row.original
            console.log(item)
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className="bg-transparent">
                        <Button
                            aria-haspopup="true"
                            size="sm"
                            variant="ghost"
                        >
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem className="text-blue-600">Câp nhật</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Xoá</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]