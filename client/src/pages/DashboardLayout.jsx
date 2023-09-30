import React from 'react'
import Sidebar, { SidebarItem } from '../components/SideBar'
import 
{
    LifeBuoy, 
    Receipt, 
    Boxes, 
    Package, 
    UserCircle, 
    BarChart3, 
    LayoutDashboard, 
    Settings
}from 'lucide-react'
const DashboardLayout = () => {
    return (
        <div>
            <Sidebar>
                <SidebarItem
                    icon={<LayoutDashboard size={20}/>}
                    text="Dashboard"
                    alert
                />
                <SidebarItem icon={<BarChart3 size={20}/>} text="Statistics" active/>
                <SidebarItem icon={<BarChart3 size={20}/>} text="Statistics" />
                <SidebarItem icon={<BarChart3 size={20}/>} text="Statistics" />
                <SidebarItem icon={<BarChart3 size={20}/>} text="Statistics" />
            </Sidebar>
        </div>
    )
}

export default DashboardLayout;