import '../dashboardStyles.css';
import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import Footer from "./Footer";

const DashLayout = () => {
    return (
        <div id="item_container">
            <DashHeader />
            <div className="dash-container">
                <Outlet />
            </div>
        </div>
    )
}

export default DashLayout;