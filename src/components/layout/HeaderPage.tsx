import { useRouter } from "@tanstack/react-router";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";


export interface HeaderPageLayoutProps {
    title: string
}


const HeaderPageLayout = ({ title }: HeaderPageLayoutProps) => {
    const { history } = useRouter()


    return (
        <div className="flex items-center justify-between space-x-4">
            <div className="uppercase font-bold tracking-tight">{title}</div>

            <div className="flex gap-x-4">
                <Button size="sm">Lưu</Button>
                <Separator orientation="vertical" className="h-7 bg-primary" />
                <Button size="sm" variant="secondary" onClick={() => history.back()}>Thoát</Button>
            </div>
        </div>
    )
}

export default HeaderPageLayout;