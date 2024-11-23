import { useRouter } from "@tanstack/react-router";
import { Button } from "../ui/button";


export interface HeaderPageLayoutProps {
    title: string
}


const HeaderPageLayout = ({ title }: HeaderPageLayoutProps) => {
    const { history } = useRouter()


    return (
        <div className="flex items-center justify-between space-x-4">
            <div className="uppercase font-bold tracking-tight">{title}</div>

            <Button size="sm" variant="outline" onClick={() => history.back()}>Thoát</Button>
        </div>
    )
}

export default HeaderPageLayout;