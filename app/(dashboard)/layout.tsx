import Player from "@/components/player";
import SideNavbar from "./_components/side-navbar";
import UserNavbar from "./_components/user-navbar";


interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout = ({children}:DashboardLayoutProps) => {
    return ( 
        <main className="h-[100vh]">
            <div className="flex justify-between">
                <SideNavbar/>
                {children}
                <UserNavbar/>
            </div>
            <Player/>
        </main>
     );
}
 
export default DashboardLayout;